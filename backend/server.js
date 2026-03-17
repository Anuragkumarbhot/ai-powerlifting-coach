const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const app = express();

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("AI Powerlifting Backend Running");
});

// ✅ HEALTH CHECK (IMPORTANT)
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("score-update", (data) => {
    io.emit("score-update", data);
  });
});

const PORT = process.env.PORT || 10000;

server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
