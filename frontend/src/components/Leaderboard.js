import React from "react";

function Leaderboard() {
  const athletes = [
    { name: "Athlete 1", total: 500 },
    { name: "Athlete 2", total: 470 },
    { name: "Athlete 3", total: 450 }
  ];

  return (
    <div>
      {athletes.map((a, i) => (
        <p key={i}>
          {i + 1}. {a.name} — {a.total} kg
        </p>
      ))}
    </div>
  );
}

export default Leaderboard;
