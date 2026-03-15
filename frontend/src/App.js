import React, { useState } from "react";
import "./App.css";

import Timer from "./components/Timer";
import JudgePanel from "./components/JudgePanel";
import ControlPanel from "./components/ControlPanel";
import Leaderboard from "./components/Leaderboard";
import AIAttempt from "./components/AIAttempt";

function App(){

const [name,setName] = useState("")
const [squat,setSquat] = useState("")
const [bench,setBench] = useState("")
const [deadlift,setDeadlift] = useState("")

const [athletes,setAthletes] = useState([])

const addAthlete = () => {

if(!name) return

const total =
Number(squat)+
Number(bench)+
Number(deadlift)

setAthletes([
...athletes,
{
name,
squat,
bench,
deadlift,
total
}
])

setName("")
setSquat("")
setBench("")
setDeadlift("")

}

return(

<div className="container"><div className="header">
<h1>🏋️ Powerlifting Meet Manager</h1>
</div><div className="grid"><div className="card"><h2>Athlete Entry</h2><input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Squat"
value={squat}
onChange={(e)=>setSquat(e.target.value)}
/>

<input
placeholder="Bench"
value={bench}
onChange={(e)=>setBench(e.target.value)}
/>

<input
placeholder="Deadlift"
value={deadlift}
onChange={(e)=>setDeadlift(e.target.value)}
/>

<button onClick={addAthlete}>
Add Athlete
</button></div><Timer/><JudgePanel/><ControlPanel/><AIAttempt/><Leaderboard athletes={athletes}/></div></div>)

}

export default App
