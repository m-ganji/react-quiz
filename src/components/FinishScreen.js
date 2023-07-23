import React from "react";

export default function FinishScreen({ points, maxPossiblePoints }) {
  const percentage = Math.round((points / maxPossiblePoints) * 100) + "%";

  return (
    <div className="result">
      You scored {points} out of {maxPossiblePoints} ({percentage})
    </div>
  );
}
