import React from "react";

/* simplified IPF points formula */

const ipfPoints = (total, bodyweight) => {

if(!total || !bodyweight) return 0

return Math.round((total / bodyweight) * 100)

}

function Leaderboard({ athletes }) {

const ranked = [...athletes]
.map(a => ({
...a,
points: ipfPoints(a.total, a.weightClass)
}))
.sort((a,b)=>b.points-a.points)

const bestLifter = ranked[0]

return(

<div className="card">

  <h2>🏆 Leaderboard</h2>

  {bestLifter && (

    <div style={{marginBottom:"20px"}}>

      <h3>🥇 Best Lifter</h3>

      <p>
      {bestLifter.name} — {bestLifter.points} pts
      </p>

    </div>

  )}

  <table className="score-table">

    <thead>

      <tr>
        <th>Rank</th>
        <th>Athlete</th>
        <th>Total</th>
        <th>IPF Points</th>
      </tr>

    </thead>

    <tbody>

      {ranked.map((a,i)=>(
        <tr key={i}>
          <td>{i+1}</td>
          <td>{a.name}</td>
          <td>{a.total} kg</td>
          <td>{a.points}</td>
        </tr>
      ))}

    </tbody>

  </table>

</div>

)

}

export default Leaderboard
