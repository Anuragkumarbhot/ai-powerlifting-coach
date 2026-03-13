import React, { useState } from "react";

export default function AthleteForm({ onSubmit }) {

  const [squat, setSquat] = useState("");
  const [bench, setBench] = useState("");
  const [deadlift, setDeadlift] = useState("");

  const submit = (e) => {

    e.preventDefault();

    onSubmit({
      squat: Number(squat),
      bench: Number(bench),
      deadlift: Number(deadlift)
    });

  };

  return (
    <form onSubmit={submit}>

      <input
        placeholder="Squat"
        onChange={(e)=>setSquat(e.target.value)}
      />

      <input
        placeholder="Bench"
        onChange={(e)=>setBench(e.target.value)}
      />

      <input
        placeholder="Deadlift"
        onChange={(e)=>setDeadlift(e.target.value)}
      />

      <button type="submit">
        Generate Program
      </button>

    </form>
  );
}
