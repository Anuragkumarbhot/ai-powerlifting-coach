function generateProgram(squat, bench, deadlift) {

  const total = squat + bench + deadlift;

  const weeks = [];

  for (let i = 1; i <= 4; i++) {

    weeks.push({
      week: i,
      squat: Math.round(squat * (0.65 + i * 0.05)),
      bench: Math.round(bench * (0.65 + i * 0.05)),
      deadlift: Math.round(deadlift * (0.65 + i * 0.05))
    });

  }

  return {
    total,
    program: weeks
  };
}

module.exports = generateProgram;
