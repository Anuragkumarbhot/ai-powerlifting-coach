import React, { useState } from "react";

export default function AttemptCalculator() {

  const [max, setMax] = useState("");

  const opener = Math.round(max * 0.9);
  const second = Math.round(max * 0.96);
  const third = Math.round(max * 1.02);

  return (

    <div>

      <h2>Attempt Calculator</h2>

      <input
        placeholder="Enter 1RM"
        onChange={(e)=>setMax(e.target.value)}
      />

      {max && (
        <div>

          <p>Opener: {opener} kg</p>
          <p>Second Attempt: {second} kg</p>
          <p>Third Attempt: {third} kg</p>

        </div>
      )}

    </div>

  );

}
