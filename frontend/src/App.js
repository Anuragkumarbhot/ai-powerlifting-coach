import React, { useState, useEffect } from "react";
import "./App.css";
import { io } from "socket.io-client";

import Timer from "./components/Timer";
import JudgePanel from "./components/JudgePanel";
import TVScoreboard from "./components/TVScoreboard";

const socket = io("https://ai-powerlifting-coach-backend.onrender.com");

function App() {

const [athleteName,setAthleteName] = useState("");
const [athletes,setAthletes] = useState([]);

const [rm,setRm] = useState("");

const [lift,setLift] = useState({
athlete:"Waiting...",
lift:"Squat",
weight:0,
attempt:1
});

const [lights,setLights] = useState({
left:"white",
center:"white",
right:"white"
});

useEffect(()=>{

socket.on("updateScoreboard",(data)=>{
  setLift(data);
});

socket.on("judgeLights",(data)=>{
  setLights(data);
});

},[]);

const addAthlete = () => {

if(!athleteName) return;

setAthletes([...athletes,athleteName]);

setAthleteName("");

};

const calculateAttempt = (rm)=>{

if(!rm) return 0;

return Math.round(rm*0.9);

};

return (

<div className="container">

  <div className="header">
    <h1>🏋️ AI Powerlifting Meet System</h1>
  </div>


  <div className="grid">

    {/* Athlete Entry */}

    <div className="card">

      <h2>Athlete Entry</h2>

      <input
      placeholder="Athlete Name"
      value={athleteName}
      onChange={(e)=>setAthleteName(e.target.value)}
      />

      <button onClick={addAthlete}>
        Add Athlete
      </button>

      <ul>
      {athletes.map((a,i)=>(
        <li key={i}>{a}</li>
      ))}
      </ul>

    </div>


    {/* Attempt Calculator */}

    <div className="card">

      <h2>Attempt Calculator</h2>

      <input
      placeholder="Enter 1RM"
      value={rm}
      onChange={(e)=>setRm(e.target.value)}
      />

      <p>
      Suggested Attempt : {calculateAttempt(rm)} kg
      </p>

    </div>


    {/* Timer */}

    <Timer/>


    {/* Judge Panel */}

    <JudgePanel/>

  </div>


  {/* Live Scoreboard */}

  <div className="scoreboard">

    <h2>🏆 Live Competition</h2>

    <h3>{lift.athlete}</h3>

    <h1>{lift.weight} kg</h1>

    <p>
    {lift.lift} — Attempt {lift.attempt}
    </p>


    <div className="judge-lights">

      <div className={`light ${lights.left}`}></div>

      <div className={`light ${lights.center}`}></div>

      <div className={`light ${lights.right}`}></div>

    </div>

  </div>


  {/* TV Scoreboard Mode */}

  <TVScoreboard/>

</div>

);

}

export default App;
