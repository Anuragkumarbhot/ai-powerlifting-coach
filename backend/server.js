const express = require("express")
const http = require("http")
const cors = require("cors")
const { Server } = require("socket.io")

const meetState = require("./data/meetState")

const app = express()
app.use(cors())
app.use(express.json())

const server = http.createServer(app)

const io = new Server(server,{
  cors:{origin:"*"}
})

let queue = []

io.on("connection",(socket)=>{

  socket.emit("meetUpdate",meetState)
  socket.emit("queueUpdate",queue)

  socket.on("addAthlete",(athlete)=>{
    meetState.athletes.push(athlete)
    io.emit("meetUpdate",meetState)
  })

  socket.on("judgeDecision",(data)=>{
    meetState.judges = data
    io.emit("meetUpdate",meetState)
  })

  socket.on("nextAttempt",()=>{
    meetState.current = queue.shift()
    io.emit("meetUpdate",meetState)
  })

})

app.get("/",(req,res)=>{
  res.send("Powerlifting Backend Running")
})

server.listen(5000,()=>{
  console.log("Server running on 5000")
})
