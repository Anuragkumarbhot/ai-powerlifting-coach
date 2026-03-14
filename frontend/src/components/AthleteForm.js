import React, { useState } from "react";

export default function AthleteForm({ onSubmit }) {

  const [squat, setSquat] = useState("");
  const [bench, setBench] = useState("");
  const [deadlift, setDeadlift] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    onSubmit({
      squat: Number(squat),
      bench: Number(bench),
      deadlift: Number(deadlift)
    });

  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        placeholder="Squat (kg)"
        onChange={(e)=>setSquat(e.target.value)}
      />

      <input
        placeholder="Bench (kg)"
        onChange={(e)=>setBench(e.target.value)}
      />

      <input
        placeholder="Deadlift (kg)"
        onChange={(e)=>setDeadlift(e.target.value)}
      />

      <button type="submit">
        Generate Program
      </button>

    </form>

  );

          }
