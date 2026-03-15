import React from "react";
import { io } from "socket.io-client";

const socket = io("https://ai-powerlifting-coach-backend.onrender.com");

function JudgePanel() {

const sendDecision = (color) => {

socket.emit("judgeDecision", {
  left: color,
  center: color,
  right: color
});

};

return (

<div className="card">

  <h2>Judge Panel</h2>

  <div style={{display:"flex",gap:"10px"}}>

    <button onClick={()=>sendDecision("white")}>
      Good Lift ⚪
    </button>

    <button onClick={()=>sendDecision("red")}>
      No Lift 🔴
    </button>

  </div>

</div>

);

}

export default JudgePanel;
