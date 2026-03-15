import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("https://ai-powerlifting-coach-backend.onrender.com");

function TVScoreboard() {

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

return(

<div style={{
  background:"#000",
  color:"#fff",
  height:"100vh",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  fontFamily:"Arial"
}}>

  <h1 style={{color:"gold",fontSize:"60px"}}>
    POWERLIFTING
  </h1>

  <h2 style={{fontSize:"40px"}}>
    {lift.athlete}
  </h2>

  <h3 style={{fontSize:"35px"}}>
    {lift.lift}
  </h3>

  <h1 style={{fontSize:"120px"}}>
    {lift.weight} kg
  </h1>

  <h2 style={{fontSize:"30px"}}>
    Attempt {lift.attempt}
  </h2>


  <div style={{
    display:"flex",
    gap:"40px",
    marginTop:"40px"
  }}>

    <div className={`light ${lights.left}`}></div>
    <div className={`light ${lights.center}`}></div>
    <div className={`light ${lights.right}`}></div>

  </div>

</div>

);

}

export default TVScoreboard;
