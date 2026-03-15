import React, { useState } from "react";
import { io } from "socket.io-client";

const socket = io("https://ai-powerlifting-coach-backend.onrender.com");

function ControlPanel(){

const [athlete,setAthlete] = useState("")
const [lift,setLift] = useState("Squat")
const [weight,setWeight] = useState("")
const [attempt,setAttempt] = useState(1)

const updateLift = () => {

socket.emit("updateLift",{
athlete,
lift,
weight,
attempt
})

}

return(

<div className="card"><h2>Meet Director Panel</h2><input
placeholder="Athlete Name"
value={athlete}
onChange={(e)=>setAthlete(e.target.value)}
/>

<select
value={lift}
onChange={(e)=>setLift(e.target.value)}

«»

<option>Squat</option>
<option>Bench</option>
<option>Deadlift</option></select><input
placeholder="Weight (kg)"
value={weight}
onChange={(e)=>setWeight(e.target.value)}
/>

<input
type="number"
placeholder="Attempt"
value={attempt}
onChange={(e)=>setAttempt(e.target.value)}
/>

<button onClick={updateLift}>
Update Scoreboard
</button></div>)

}

export default ControlPanel
