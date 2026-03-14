import React, { useState } from "react";

function App() {

  const [result, setResult] = useState(null);

  const generateProgram = async () => {

    const res = await fetch("http://localhost:5000/program", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        squat:200,
        bench:130,
        deadlift:240
      })
    });

    const data = await res.json();

    setResult(data);

  };

  return (

    <div>

      <h1>AI Powerlifting Coach</h1>

      <button onClick={generateProgram}>
        Generate Program
      </button>

      {result && (

        <div>

          <h2>Total: {result.total}</h2>

          {result.program.map((w)=>(
            <div key={w.week}>
              Week {w.week} — Squat {w.squat} Bench {w.bench} Deadlift {w.deadlift}
            </div>
          ))}

        </div>

      )}

    </div>

  );

}

export default App;
fetch("https://ai-powerlifting-coach.onrender.com/program")
