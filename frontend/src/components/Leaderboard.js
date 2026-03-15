import React from "react";
import { jsPDF } from "jspdf";

function Leaderboard({ athletes }) {

const ranked = [...athletes].sort((a,b)=>b.total-a.total)

const exportPDF = () => {

const doc = new jsPDF()

doc.setFontSize(18)
doc.text("Powerlifting Meet Results",20,20)

let y = 40

ranked.forEach((a,i)=>{

  doc.text(
    `${i+1}. ${a.name} — Total: ${a.total} kg`,
    20,
    y
  )

  y += 10

})

doc.save("meet-results.pdf")

}

return(

<div className="card">

  <h2>🏆 Leaderboard</h2>

  <button onClick={exportPDF}>
    Export Results (PDF)
  </button>

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
