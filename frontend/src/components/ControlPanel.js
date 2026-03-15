import React, { useState } from "react"
import socket from "../socket"

export default function ControlPanel() {

  const [athlete, setAthlete] = useState("")
  const [lift, setLift] = useState("Squat")
  const [weight, setWeight] = useState(0)

  const sendUpdate = () => {

    socket.emit("meetUpdate", {
      athlete,
      lift,
      weight,
      judges: [false, false, false]
    })

  }

  return (

    <div className="control-panel">

      <h2>🎮 Meet Control Panel</h2>

      <input
        type="text"
        placeholder="Athlete Name"
        value={athlete}
        onChange={(e) => setAthlete(e.target.value)}
      />

      <select
        value={lift}
        onChange={(e) => setLift(e.target.value)}
      >
        <option>Squat</option>
        <option>Bench Press</option>
        <option>Deadlift</option>
      </select>

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <button onClick={sendUpdate}>
        Update Lift
      </button>

    </div>

  )
}
