const express = require("express")
const http = require("http")
const cors = require("cors")
const { Server } = require("socket.io")
const { Pool } = require("pg")

const app = express()

app.use(cors())
app.use(express.json())

/* ---------------- DATABASE ---------------- */

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

/* ---------------- SERVER ---------------- */

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "*"
  }
})

let meetState = {
  current: {
    athlete: "",
    lift: "Squat",
    weight: 0
  },
  judges: [false, false, false]
}

let attemptQueue = []

/* ---------------- SOCKET ---------------- */

io.on("connection", (socket) => {

  console.log("Client connected")

  socket.emit("meetUpdate", meetState)
  socket.emit("queueUpdate", attemptQueue)

  socket.on("addAttempt", (attempt) => {

    attemptQueue.push(attempt)

    io.emit("queueUpdate", attemptQueue)

  })

  socket.on("judgeDecision", (data) => {

    meetState.judges = data

    io.emit("meetUpdate", meetState)

  })

  socket.on("nextAttempt", () => {

    const next = attemptQueue.shift()

    meetState.current = next

    io.emit("meetUpdate", meetState)

    io.emit("queueUpdate", attemptQueue)

  })

})

/* ---------------- API ---------------- */

app.get("/", (req, res) => {
  res.send("Powerlifting Backend Running")
})

/* Add Athlete */

app.post("/athletes", async (req, res) => {

  const { name, weight_class, category } = req.body

  const result = await pool.query(
    "INSERT INTO athletes(name, weight_class, category) VALUES($1,$2,$3) RETURNING *",
    [name, weight_class, category]
  )

  res.json(result.rows[0])

})

/* Get Athletes */

app.get("/athletes", async (req, res) => {

  const result = await pool.query("SELECT * FROM athletes")

  res.json(result.rows)

})

/* Add Attempt */

app.post("/attempts", async (req, res) => {

  const { athlete_id, lift, weight, result } = req.body

  const data = await pool.query(
    "INSERT INTO attempts(athlete_id,lift,weight,result) VALUES($1,$2,$3,$4) RETURNING *",
    [athlete_id, lift, weight, result]
  )

  res.json(data.rows[0])

})

/* ---------------- START SERVER ---------------- */

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {

  console.log("Server running on port", PORT)

})
