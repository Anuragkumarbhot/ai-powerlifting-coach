import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("https://ai-powerlifting-coach-backend.onrender.com");

function Scoreboard() {

  const [lift, setLift] = useState({
    athlete: "Waiting...",
    lift: "Squat",
    weight: 0,
    attempt: 1
  });

  const [lights, setLights] = useState({
    left: "white",
    center: "white",
    right: "white"
  });

  useEffect(() => {

    socket.on("updateScoreboard", (data) => {
      setLift(data);
    });

    socket.on("judgeLights", (data) => {
      setLights(data);
    });

  }, []);

  return (
    <div style={styles.container}>

      <h1 style={styles.title}>🏆 Live Powerlifting Scoreboard</h1>

      <div style={styles.card}>

        <h2 style={styles.name}>{lift.athlete}</h2>

        <h3 style={styles.lift}>{lift.lift}</h3>

        <div style={styles.weight}>
          {lift.weight} kg
        </div>

        <div style={styles.attempt}>
          Attempt {lift.attempt}
        </div>

      </div>

      <div style={styles.lightsContainer}>

        <div style={{...styles.light, background: lights.left}}></div>

        <div style={{...styles.light, background: lights.center}}></div>

        <div style={{...styles.light, background: lights.right}}></div>

      </div>

    </div>
  );
}

const styles = {

  container: {
    textAlign: "center",
    padding: "40px",
    fontFamily: "Arial"
  },

  title: {
    fontSize: "36px",
    marginBottom: "30px"
  },

  card: {
    background: "#111",
    color: "white",
    padding: "40px",
    borderRadius: "10px",
    width: "350px",
    margin: "auto"
  },

  name: {
    fontSize: "28px"
  },

  lift: {
    fontSize: "24px",
    marginTop: "10px"
  },

  weight: {
    fontSize: "48px",
    fontWeight: "bold",
    marginTop: "20px"
  },

  attempt: {
    fontSize: "22px",
    marginTop: "10px"
  },

  lightsContainer: {
    marginTop: "40px",
    display: "flex",
    justifyContent: "center",
    gap: "40px"
  },

  light: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    border: "3px solid black"
  }

};

export default Scoreboard;
