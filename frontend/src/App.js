import React, { useState } from "react";

function App() {
  const [squat, setSquat] = useState("");
  const [bench, setBench] = useState("");
  const [deadlift, setDeadlift] = useState("");
  const [program, setProgram] = useState(null);

  const generateProgram = async () => {
    const response = await fetch("https://ai-powerlifting-coach.onrender.com/program", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        squat: Number(squat),
        bench: Number(bench),
        deadlift: Number(deadlift),
      }),
    });

    const data = await response.json();
    setProgram(data);
  };

  return (
    <div style={{ textAlign: "center", padding: "40px", fontFamily: "Arial" }}>
      <h1>🏋️ AI Powerlifting Coach</h1>

      <div style={{ margin: "20px" }}>
        <input
          type="number"
          placeholder="Squat 1RM"
          value={squat}
          onChange={(e) => setSquat(e.target.value)}
        />
      </div>

      <div style={{ margin: "20px" }}>
        <input
          type="number"
          placeholder="Bench 1RM"
          value={bench}
          onChange={(e) => setBench(e.target.value)}
        />
      </div>

      <div style={{ margin: "20px" }}>
        <input
          type="number"
          placeholder="Deadlift 1RM"
          value={deadlift}
          onChange={(e) => setDeadlift(e.target.value)}
        />
      </div>

      <button onClick={generateProgram}>
        Generate Training Program
      </button>

      {program && (
        <div style={{ marginTop: "40px" }}>
          <h2>Training Plan</h2>
          <p>Squat: {program.squat}</p>
          <p>Bench: {program.bench}</p>
          <p>Deadlift: {program.deadlift}</p>
        </div>
      )}
    </div>
  );
}

export default App;
