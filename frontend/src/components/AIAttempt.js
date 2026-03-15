import React, { useState } from "react";

function AIAttempt(){

const [rm,setRm] = useState("")

const firstAttempt = rm ? Math.round(rm0.9) : 0
const secondAttempt = rm ? Math.round(rm0.95) : 0
const thirdAttempt = rm ? Math.round(rm*1.02) : 0

return(

<div className="card"><h2>AI Attempt Recommendation</h2><input
placeholder="Enter 1RM"
value={rm}
onChange={(e)=>setRm(e.target.value)}
/>

<p>1st Attempt : {firstAttempt} kg</p>
<p>2nd Attempt : {secondAttempt} kg</p>
<p>3rd Attempt : {thirdAttempt} kg</p></div>)

}

export default AIAttempt
