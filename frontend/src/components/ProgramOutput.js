import React from "react";

export default function ProgramOutput({ data }) {

  return (

    <div>

      <h2>Total: {data.total}</h2>

      {data.program.map((week)=>(
        <div key={week.week}>

          Week {week.week}

          Squat: {week.squat}kg

          Bench: {week.bench}kg

          Deadlift: {week.deadlift}kg

        </div>
      ))}

    </div>

  );

}
