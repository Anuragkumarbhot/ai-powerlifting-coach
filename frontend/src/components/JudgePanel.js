import React from "react";
import "./App.css";

import AthleteForm from "./components/AthleteForm";
import AttemptCalculator from "./components/AttemptCalculator";
import Leaderboard from "./components/Leaderboard";
import StrengthChart from "./components/StrengthChart";
import ProgramOutput from "./components/ProgramOutput";
import CompetitionBoard from "./components/CompetitionBoard";
import JudgePanel from "./components/JudgePanel";

function App() {

  return (

    <div className="app">

      <header className="header">
        <h1>🏋️ AI Powerlifting Coach</h1>
        <p>Competition Dashboard</p>
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
          <h2>Training Program</h2>
          <ProgramOutput />
        </div>

        <div className="card full">
          <CompetitionBoard />
        </div>

        <div className="card">
          <JudgePanel />
        </div>

      </div>

    </div>

  );
}

export default App;
