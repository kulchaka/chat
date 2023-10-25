const express = require("express")
const { createServer } = require("node:http")
const { Server } = require("socket.io")

const port = 9999

const app = express()
const server = createServer(app)
const io = new Server(server)

const rooms = new Map()

app.get("/", (req, res) => {
  res.json(rooms)
})

app.post("/", (req, res) => {
  res.send()
})

io.on("connection", (socket) => {
  console.log("user connected", socket.id)
})

server.listen(port, (err) => {
  if (err) {
    console.log("💡 ~ server.listen ~ err:", err)
  }
  console.log(`server running at http://localhost:${port}`)
})
