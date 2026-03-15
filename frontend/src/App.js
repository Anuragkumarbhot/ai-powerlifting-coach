import React from "react";
import "./App.css";

import AthleteEntry from "./components/AthleteEntry";
import AttemptCalculator from "./components/AttemptCalculator";
import Leaderboard from "./components/Leaderboard";
import StrengthChart from "./components/StrengthChart";
import CompetitionBoard from "./components/CompetitionBoard";
import ControlPanel from "./components/ControlPanel";
import JudgePanel from "./components/JudgePanel";
import Scoreboard from "./components/Scoreboard";
import TVScoreboard from "./components/TVScoreboard";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="app">

      <header className="header">
        🏋️ AI Powerlifting Coach
      </header>

      <div className="dashboard">

        <div className="card">
          <AthleteEntry />
        </div>

        <div className="card">
          <AttemptCalculator />
        </div>

        <div className="card">
          <Leaderboard />
        </div>

        <div className="card">
          <StrengthChart />
        </div>

        <div className="card">
          <ControlPanel />
        </div>

        <div className="card">
          <JudgePanel />
        </div>

        <div className="card">
          <Timer />
        </div>

      </div>

      <div className="competition-section">
        <CompetitionBoard />
      </div>

      <div className="scoreboard-section">
        <Scoreboard />
      </div>

      <div className="tv-section">
        <TVScoreboard />
      </div>

    </div>
  );
}

export default App;
