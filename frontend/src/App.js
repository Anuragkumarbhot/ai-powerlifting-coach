import React, { useState } from "react";
import AthleteForm from "./components/AthleteForm";
import ProgramOutput from "./components/ProgramOutput";
import "./App.css";

function App() {

  const [program, setProgram] = useState(null);

  const generateProgram = async (data) => {

    const res = await fetch("http://localhost:5000/program", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();

    setProgram(result);

  };

  return (
    <div className="container">

      <h1>AI Powerlifting Coach</h1>

      <AthleteForm onSubmit={generateProgram} />

      {program && <ProgramOutput data={program} />}

    </div>
  );
}

export default App;
