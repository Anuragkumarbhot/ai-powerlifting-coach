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

      <div className="grid">

        <AthleteEntry />

        <AttemptCalculator />

        <Leaderboard />

        <StrengthChart />

        <ControlPanel />

        <JudgePanel />

        <Timer />

      </div>

      <CompetitionBoard />

      <Scoreboard />

      <TVScoreboard />

    </div>
  );
}

export default App;
