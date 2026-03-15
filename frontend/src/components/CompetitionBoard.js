import React, { useState } from "react";

function CompetitionBoard() {

  const [athletes, setAthletes] = useState([
    { name: "Athlete 1", squat: 180, bench: 120, deadlift: 220 },
    { name: "Athlete 2", squat: 170, bench: 115, deadlift: 210 },
    { name: "Athlete 3", squat: 160, bench: 110, deadlift: 200 }
  ]);

  return (
    <div>
      <h2>🏆 Competition Scoreboard</h2>

      <table style={{ width: "100%", color: "white" }}>
        <thead>
          <tr>
            <th>Athlete</th>
            <th>Squat</th>
            <th>Bench</th>
            <th>Deadlift</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {athletes.map((a, i) => (
            <tr key={i}>
              <td>{a.name}</td>
              <td>{a.squat}</td>
              <td>{a.bench}</td>
              <td>{a.deadlift}</td>
              <td>{a.squat + a.bench + a.deadlift}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default CompetitionBoard;
