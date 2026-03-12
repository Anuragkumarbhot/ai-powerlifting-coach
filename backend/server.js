const express = require("express");
const cors = require("cors");
const generateProgram = require("./aiCoach");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/program", (req, res) => {

  const { squat, bench, deadlift } = req.body;

  const result = generateProgram(squat, bench, deadlift);

  res.json(result);

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
