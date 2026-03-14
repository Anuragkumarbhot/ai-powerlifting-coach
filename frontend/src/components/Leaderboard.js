import React from "react";

export default function Leaderboard({ athletes }) {

  const sorted = [...athletes].sort((a,b)=> b.total - a.total);

  return (

    <div>

      <h2>Leaderboard</h2>

      <table>

        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Squat</th>
            <th>Bench</th>
            <th>Deadlift</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>

          {sorted.map((a,index)=>(
            <tr key={index}>

              <td>{index+1}</td>
              <td>{a.name}</td>
              <td>{a.squat}</td>
              <td>{a.bench}</td>
              <td>{a.deadlift}</td>
              <td>{a.total}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>

  );

}
