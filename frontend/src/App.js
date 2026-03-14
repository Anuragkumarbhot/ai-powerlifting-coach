import React, { useState } from "react";
import AthleteForm from "./components/AthleteForm";
import ProgramOutput from "./components/ProgramOutput";
import StrengthChart from "./components/StrengthChart";
import AttemptCalculator from "./components/AttemptCalculator";
import AthleteEntry from "./components/AthleteEntry";
import Leaderboard from "./components/Leaderboard";

function App() {

  const [program, setProgram] = useState(null);
  const [athletes, setAthletes] = useState([]);

  const generateProgram = async (data) => {

    const res = await fetch("http://localhost:5000/program", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    });

    const result = await res.json();

    setProgram(result);
  };

  const addAthlete = (athlete)=>{

    setAthletes([...athletes, athlete]);

  };

  return (

    <div>

      <h1>AI Powerlifting Coach</h1>

      <AthleteForm onSubmit={generateProgram} />

      {program && (
        <>
          <ProgramOutput data={program}/>
          <StrengthChart data={program}/>
        </>
      )}

      <AttemptCalculator />

      <AthleteEntry addAthlete={addAthlete} />

      <Leaderboard athletes={athletes} />

    </div>

  );

}

export default App;
