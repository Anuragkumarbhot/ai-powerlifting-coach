import React, { useState } from "react";

export default function AthleteEntry({ addAthlete }) {

  const [name,setName] = useState("");
  const [squat,setSquat] = useState("");
  const [bench,setBench] = useState("");
  const [deadlift,setDeadlift] = useState("");

  const submit = (e)=>{

    e.preventDefault();

    const total =
      Number(squat) + Number(bench) + Number(deadlift);

    addAthlete({
      name,
      squat:Number(squat),
      bench:Number(bench),
      deadlift:Number(deadlift),
      total
    });

    setName("");
    setSquat("");
    setBench("");
    setDeadlift("");

  };

  return (

    <form onSubmit={submit}>

      <h2>Add Athlete</h2>

      <input
        placeholder="Athlete Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <input
        placeholder="Squat"
        value={squat}
        onChange={(e)=>setSquat(e.target.value)}
      />

      <input
        placeholder="Bench"
        value={bench}
        onChange={(e)=>setBench(e.target.value)}
      />

      <input
        placeholder="Deadlift"
        value={deadlift}
        onChange={(e)=>setDeadlift(e.target.value)}
      />

      <button>Add Athlete</button>

    </form>

  );

                   }
