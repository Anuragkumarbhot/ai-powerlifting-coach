import React, { useEffect, useState } from "react"
import socket from "../socket"

export default function Scoreboard() {

  const [meet, setMeet] = useState({
    athlete: "",
    lift: "",
    weight: 0,
    judges: [false, false, false]
  })

  useEffect(() => {

    socket.on("meetUpdate", (data) => {
      setMeet(data)
    })

    return () => socket.off("meetUpdate")

  }, [])

  return (
    <div className="scoreboard">

      <h2>🏆 Competition Scoreboard</h2>

      <div className="score-row">
        <strong>Athlete:</strong> {meet.athlete}
      </div>

      <div className="score-row">
        <strong>Lift:</strong> {meet.lift}
      </div>

      <div className="score-row">
        <strong>Weight:</strong> {meet.weight} kg
      </div>

      <div className="judge-lights">

        <span className={meet.judges[0] ? "white-light" : "red-light"}></span>
        <span className={meet.judges[1] ? "white-light" : "red-light"}></span>
        <span className={meet.judges[2] ? "white-light" : "red-light"}></span>

      </div>

    </div>
  )
    }
