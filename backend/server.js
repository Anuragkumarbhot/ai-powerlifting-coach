const express = require("express")
const http = require("http")
const cors = require("cors")
const { Server } = require("socket.io")
const { Pool } = require("pg")

const app = express()

app.use(cors())
app.use(express.json())

/* DATABASE */

const pool = new Pool({
connectionString: process.env.DATABASE_URL,
ssl:{ rejectUnauthorized:false }
})

/* BASIC ROUTES */

app.get("/",(req,res)=>{
res.send("AI Powerlifting Backend Running")
})

app.get("/health",(req,res)=>{
res.json({status:"ok"})
})

/* HTTP SERVER */

const server = http.createServer(app)

/* SOCKET.IO */

const io = new Server(server,{
cors:{
origin:"*"
}
})

/* MEET STATE */

let attemptQueue = []

let meetState = {

currentAttempt:null,

judges:[false,false,false]

}

/* SOCKET CONNECTION */

io.on("connection",(socket)=>{

console.log("Client connected")

socket.emit("meetUpdate",meetState)

socket.emit("queueUpdate",attemptQueue)

/* ADD ATTEMPT */

socket.on("addAttempt",(data)=>{

attemptQueue.push(data)

attemptQueue.sort((a,b)=>a.weight-b.weight)

io.emit("queueUpdate",attemptQueue)

})

/* NEXT ATTEMPT */

socket.on("nextAttempt",()=>{

const next = attemptQueue.shift()

meetState.currentAttempt = next

meetState.judges=[false,false,false]

io.emit("meetUpdate",meetState)

io.emit("queueUpdate",attemptQueue)

})

/* JUDGE DECISION */

socket.on("judgeDecision",(data)=>{

meetState.judges = data

io.emit("meetUpdate",meetState)

})

})

/* ATHLETE API */

app.post("/athletes",async(req,res)=>{

const {name,weight_class,category} = req.body

const result = await pool.query(

"INSERT INTO athletes(name,weight_class,category) VALUES($1,$2,$3) RETURNING *",

[name,weight_class,category]

)

res.json(result.rows[0])

})

app.get("/athletes",async(req,res)=>{

const result = await pool.query(

"SELECT * FROM athletes ORDER BY id ASC"

)

res.json(result.rows)

})

/* ATTEMPT API */

app.post("/attempts",async(req,res)=>{

const {athlete_id,lift,weight,result} = req.body

const data = await pool.query(

"INSERT INTO attempts(athlete_id,lift,weight,result) VALUES($1,$2,$3,$4) RETURNING *",

[athlete_id,lift,weight,result]

)

res.json(data.rows[0])

})

app.get("/attempts",async(req,res)=>{

const data = await pool.query(

"SELECT * FROM attempts"

)

res.json(data.rows)

})

/* START SERVER */

const PORT = process.env.PORT || 5000

server.listen(PORT,()=>{

console.log("Server running on port",PORT)

})
