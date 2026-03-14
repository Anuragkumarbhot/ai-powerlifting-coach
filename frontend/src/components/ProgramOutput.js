import React from "react";

export default function ProgramOutput({ data }) {

  return (

    <div>

      <h2>Total: {data.total}</h2>

      {data.program.map((week)=>(
        <div key={week.week}>

          <h3>Week {week.week}</h3>

          <p>Squat: {week.squat} kg</p>
          <p>Bench: {week.bench} kg</p>
          <p>Deadlift: {week.deadlift} kg</p>

        </div>
      ))}

    </div>

  );

}
