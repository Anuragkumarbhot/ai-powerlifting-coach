import React,{useState} from "react"
import {io} from "socket.io-client"

const socket = io("http://localhost:5000")

function ControlPanel(){

const [name,setName] = useState("")

const addAthlete = ()=>{

socket.emit("addAthlete",{name})

}

return(

<div>

<h2>Control Panel</h2>

<input
placeholder="Athlete name"
onChange={(e)=>setName(e.target.value)}
/>

<button onClick={addAthlete}>
Add Athlete
</button>

</div>

)

}

export default ControlPanel
