import React from "react"
import Scoreboard from "./components/Scoreboard"
import ControlPanel from "./components/ControlPanel"
import JudgePanel from "./components/JudgePanel"

function App(){

return(

<div>

<h1>🏋 AI Powerlifting Meet System</h1>

<ControlPanel/>

<JudgePanel/>

<Scoreboard/>

</div>

)

}

export default App
