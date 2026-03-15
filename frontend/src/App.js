import React, { useState } from "react";
import "./App.css";

import Timer from "./components/Timer";
import JudgePanel from "./components/JudgePanel";
import ControlPanel from "./components/ControlPanel";
import Leaderboard from "./components/Leaderboard";
import AIAttempt from "./components/AIAttempt";

function App(){

const [name,setName] = useState("")
const [gender,setGender] = useState("Male")
const [ageCategory,setAgeCategory] = useState("Senior")
const [weightClass,setWeightClass] = useState("59")

const [squat,setSquat] = useState("")
const [bench,setBench] = useState("")
const [deadlift,setDeadlift] = useState("")

const [athletes,setAthletes] = useState([])

/* MEN WEIGHT CLASSES */

const maleClasses = [
"59",
"66",
"74",
"83",
"93",
"105",
"120",
"120+"
]

/* WOMEN WEIGHT CLASSES */

const femaleClasses = [
"47",
"52",
"57",
"63",
"69",
"76",
"84",
"84+"
]

const addAthlete = () => {

if(!name) return

const total =
Number(squat) +
Number(bench) +
Number(deadlift)

setAthletes([
...athletes,
{
name,
gender,
ageCategory,
weightClass,
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
<h1>🏋️ IPF Powerlifting Meet Manager</h1>
</div><div className="grid"><div className="card"><h2>Athlete Entry</h2><input
placeholder="Athlete Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

{/* Gender */}

<select
value={gender}
onChange={(e)=>setGender(e.target.value)}

«»

<option value="Male">Male</option>
<option value="Female">Female</option></select>{/* Age Categories */}

<select
value={ageCategory}
onChange={(e)=>setAgeCategory(e.target.value)}

«»

<option value="Sub-Junior">
Sub-Junior (14–18)
</option><option value="Junior">
Junior (19–23)
</option><option value="Senior">
Senior / Open
</option><option value="Masters 1">
Masters 1 (40–49)
</option><option value="Masters 2">
Masters 2 (50–59)
</option><option value="Masters 3">
Masters 3 (60–69)
</option><option value="Masters 4">
Masters 4 (70+)
</option></select>{/* Weight Classes */}

<select
value={weightClass}
onChange={(e)=>setWeightClass(e.target.value)}

«»

{(gender==="Male" ? maleClasses : femaleClasses)
.map((wc,i)=>(

<option key={i} value={wc}>
{wc} kg
</option>
))}</select><input
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
</button></div>{/* Other Meet Components */}

<Timer/><JudgePanel/><ControlPanel/><AIAttempt/><Leaderboard athletes={athletes}/></div></div>)

}

export default App
