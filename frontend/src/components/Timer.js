import React, { useState, useEffect } from "react";

function Timer() {

const [time,setTime]=useState(60)

useEffect(()=>{

if(time<=0) return

const interval=setInterval(()=>{
  setTime(t=>t-1)
},1000)

return ()=>clearInterval(interval)

},[time])

return(

<div className="card">

  <h2>Attempt Timer</h2>

  <h1>{time}s</h1>

  <button onClick={()=>setTime(60)}>Reset</button>

</div>

)
}

export default Timer
