import React, { useState } from "react";
import AthleteForm from "./components/AthleteForm";
import ProgramOutput from "./components/ProgramOutput";
import StrengthChart from "./components/StrengthChart";
import AttemptCalculator from "./components/AttemptCalculator";
import "./App.css";

function App() {

  const [program, setProgram] = useState(null);

  const generateProgram = async (data) => {

    try {

      const response = await fetch("http://localhost:5000/program", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      setProgram(result);

    } catch (error) {

      console.error("Error fetching program:", error);

    }

  };

  return (

    <div className="container">

      <h1>AI Powerlifting Coach</h1>

      <p>Enter your Squat, Bench, and Deadlift to generate a training program.</p>

      <AthleteForm onSubmit={generateProgram} />

      {program && (

        <div>

          <ProgramOutput data={program} />

          <h2>Strength Progress</h2>

          <StrengthChart data={program} />

        </div>

      )}

      <AttemptCalculator />

    </div>

  );

}

export default App;l
