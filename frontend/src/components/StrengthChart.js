import React from "react";

function StrengthChart() {
  const data = [
    { lift: "Squat", value: 180 },
    { lift: "Bench", value: 120 },
    { lift: "Deadlift", value: 220 }
  ];

  return (
    <div>
      <h3>Strength Progress</h3>

      {data.map((item, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <p>{item.lift} : {item.value} kg</p>

          <div
            style={{
              background: "#333",
              borderRadius: "10px",
              height: "10px",
              width: "100%"
            }}
          >
            <div
              style={{
                background: "gold",
                width: `${item.value / 3}%`,
                height: "10px",
                borderRadius: "10px"
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StrengthChart;
