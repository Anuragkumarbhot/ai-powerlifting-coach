import React, { useState, useEffect } from "react";

function Scoreboard() {

  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time === 0) return;

    const timer = setTimeout(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  return (

    <div style={{
      background:"black",
      color:"white",
      padding:"40px",
      textAlign:"center"
    }}>

      <h1 style={{color:"gold"}}>🏆 POWERLIFTING SCOREBOARD</h1>

      <h2>Athlete: John Doe</h2>

      <h2>Lift: Squat</h2>

      <h1 style={{fontSize:"60px"}}>220 kg</h1>

      <h2>Attempt 2</h2>

      <h1 style={{color:"red"}}>{time}s</h1>

      <div style={{marginTop:"30px"}}>
        <span style={{fontSize:"40px"}}>⚪ ⚪ ⚪</span>
      </div>

    </div>

  );
}

export default Scoreboard;
