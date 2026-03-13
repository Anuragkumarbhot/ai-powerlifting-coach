import React, { useState } from "react";
import AthleteForm from "./components/AthleteForm";
import ProgramOutput from "./components/ProgramOutput";

function App() {

  const [program, setProgram] = useState(null);

  const generate = async (data) => {

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
    <div>

      <h1>AI Powerlifting Coach</h1>

      <AthleteForm onSubmit={generate} />

      {program && <ProgramOutput data={program} />}

    </div>
  );
}

export default App;
