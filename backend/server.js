const express = require("express")
const { createServer } = require("node:http")
const { Server } = require("socket.io")
const cors = require("cors")

const port = 9999

const app = express()
const server = createServer(app)
const io = new Server(server)

const rooms = new Map()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json(rooms)
})

app.post("/rooms", (req, res) => {
  const { roomID } = req.body
  if (!rooms.has(roomID)) {
    rooms.set(
      roomID,
      new Map([
        ["users", new Map()],
        ["messages", []],
      ])
    )
  }
  res.json([...rooms.keys()])
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
