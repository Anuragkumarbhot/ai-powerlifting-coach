import React from "react"
import {io} from "socket.io-client"

const socket = io("http://localhost:5000")

function JudgePanel(){

const goodLift = ()=>{
socket.emit("judgeDecision",[true,true,true])
}

const noLift = ()=>{
socket.emit("judgeDecision",[false,false,false])
}

return(

<div>

<h2>Judge Panel</h2>

<button onClick={goodLift}>
Good Lift
</button>

<button onClick={noLift}>
No Lift
</button>

</div>

)

}

export default JudgePanel
