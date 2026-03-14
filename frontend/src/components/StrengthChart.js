import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function StrengthChart({ data }) {

  const labels = data.program.map(w => "Week " + w.week);

  const squat = data.program.map(w => w.squat);
  const bench = data.program.map(w => w.bench);
  const deadlift = data.program.map(w => w.deadlift);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Squat",
        data: squat
      },
      {
        label: "Bench",
        data: bench
      },
      {
        label: "Deadlift",
        data: deadlift
      }
    ]
  };

  return <Line data={chartData} />;
}
