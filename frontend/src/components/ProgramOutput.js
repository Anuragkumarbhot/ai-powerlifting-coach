import React, { useState } from "react";

function ProgramOutput() {
  const [program, setProgram] = useState("");

  const generate = () => {
    setProgram(`
Week 1
Squat: 5x5 @75%
Bench: 5x5 @70%
Deadlift: 3x5 @75%

Week 2
Squat: 4x4 @80%
Bench: 4x4 @75%
Deadlift: 3x4 @80%
`);
  };

  return (
    <div>
      <button onClick={generate}>Generate Training Program</button>
      <pre>{program}</pre>
    </div>
  );
}

export default ProgramOutput;
