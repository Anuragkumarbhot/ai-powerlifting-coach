import React from "react";

function Leaderboard({ athletes }) {

const ranked = [...athletes].sort((a,b)=>b.total-a.total)

return(

<div className="card">

  <h2>🏆 Leaderboard</h2>

  <table className="score-table">

    <thead>

      <tr>
        <th>Rank</th>
        <th>Athlete</th>
        <th>Total</th>
      </tr>

    </thead>

    <tbody>

      {ranked.map((a,i)=>(
        <tr key={i}>
          <td>{i+1}</td>
          <td>{a.name}</td>
          <td>{a.total} kg</td>
        </tr>
      ))}

    </tbody>

  </table>

</div>

)

}

export default Leaderboard
