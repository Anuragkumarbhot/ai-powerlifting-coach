import React from "react";
import "./App.css";

import AthleteForm from "./components/AthleteForm";
import AttemptCalculator from "./components/AttemptCalculator";
import Leaderboard from "./components/Leaderboard";
import StrengthChart from "./components/StrengthChart";
import ProgramOutput from "./components/ProgramOutput";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🏋️ AI Powerlifting Coach</h1>
        <p>Track lifts, calculate attempts, and generate training programs</p>
      </header>

      <div className="dashboard">

        <div className="card">
          <h2>Athlete Entry</h2>
          <AthleteForm />
        </div>

        <div className="card">
          <h2>Attempt Calculator</h2>
          <AttemptCalculator />
        </div>

        <div className="card">
          <h2>Leaderboard</h2>
          <Leaderboard />
        </div>

        <div className="card">
          <h2>Strength Progress</h2>
          <StrengthChart />
        </div>

        <div className="card full">
          <h2>AI Training Program</h2>
          <ProgramOutput />
        </div>

      </div>
    </div>
  );
}

export default App;
