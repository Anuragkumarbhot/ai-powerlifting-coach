import React, { useState } from "react";

function AthleteForm() {
  const [name, setName] = useState("");

  const submitAthlete = () => {
    if (!name) return alert("Enter athlete name");
    alert("Athlete Added: " + name);
    setName("");
  };

  return (
    <div>
      <input
        placeholder="Athlete Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={submitAthlete}>Add Athlete</button>
    </div>
  );
}

export default AthleteForm;
