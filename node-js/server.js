const express = require("express")
const { createServer } = require("node:http")
const { Server } = require("socket.io")

const port = 9999

const app = express()
const server = createServer(app)
const io = new Server(server)

app.get("/", (req, res) => {
  res.send("Hello CHAT!")
})

io.on("connection", (socket) => {
  console.log("a user connected", socket.id)
})

server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`)
})
