import React,{useEffect,useState} from "react"
import {io} from "socket.io-client"

const socket = io("http://localhost:5000")

function Scoreboard(){

const [meet,setMeet] = useState({})

useEffect(()=>{

socket.on("meetUpdate",(data)=>{
setMeet(data)
})

},[])

return(

<div>

<h2>Scoreboard</h2>

<p>Athlete: {meet.current?.athlete}</p>
<p>Lift: {meet.current?.lift}</p>
<p>Weight: {meet.current?.weight}</p>

</div>

)

}

export default Scoreboard
