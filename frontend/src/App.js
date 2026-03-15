import React, { useState, useEffect } from "react";
import "./App.css";
import { io } from "socket.io-client";

const socket = io("https://ai-powerlifting-coach-backend.onrender.com");

function App() {

const [athleteName, setAthleteName] = useState("");
const [athletes, setAthletes] = useState([]);
const [rm, setRm] = useState("");

const [lift,setLift] = useState({
athlete:"Waiting...",
lift:"Squat",
weight:0,
attempt:1
})

const [lights,setLights] = useState({
left:"white",
center:"white",
right:"white"
})

const [time,setTime] = useState(60)

useEffect(()=>{

socket.on("updateScoreboard",(data)=>{
  setLift(data)
})

socket.on("judgeLights",(data)=>{
  setLights(data)
})

},[])

useEffect(()=>{

if(time<=0) return

const timer=setInterval(()=>{
  setTime(t=>t-1)
},1000)

return ()=>clearInterval(timer)

},[time])

const addAthlete = () => {
if (!athleteName) return
setAthletes([...athletes, athleteName])
setAthleteName("")
}

const calculateAttempt=(rm)=>{
if(!rm) return 0
return Math.round(rm*0.9)
}

return (

<div className="container">

  <div className="header">
    <h1>🏋️ AI Powerlifting Coach</h1>
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

      <button onClick={addAthlete}>Add Athlete</button>

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

      <p>Suggested Attempt : {calculateAttempt(rm)} kg</p>

    </div>


    {/* Strength Chart */}

    <div className="card">

      <h2>Strength Chart</h2>

      <p>Squat 180 kg</p>
      <div className="progress-bar">
        <div className="progress-fill" style={{width:"60%"}}></div>
      </div>

      <p>Bench 120 kg</p>
      <div className="progress-bar">
        <div className="progress-fill" style={{width:"40%"}}></div>
      </div>

      <p>Deadlift 220 kg</p>
      <div className="progress-bar">
        <div className="progress-fill" style={{width:"75%"}}></div>
      </div>

    </div>


    {/* Timer */}

    <div className="card">

      <h2>Attempt Timer</h2>

      <h1>{time}s</h1>

      <button onClick={()=>setTime(60)}>Reset</button>

    </div>

  </div>


  {/* LIVE SCOREBOARD */}

  <div className="scoreboard">

    <h2>🏆 Live Competition</h2>

    <h3>{lift.athlete}</h3>
    <h2>{lift.weight} kg</h2>
    <p>{lift.lift} - Attempt {lift.attempt}</p>

    <div className="judge-lights">

      <div className={`light ${lights.left}`}></div>
      <div className={`light ${lights.center}`}></div>
      <div className={`light ${lights.right}`}></div>

    </div>

  </div>

</div>

)
}

export default App
