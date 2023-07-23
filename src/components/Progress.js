import React from "react";

export default function Progress({
  index,
  question,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={question} value={index + Number(answer !== null)} />
      {console.log(index + Number(answer !== null))}
      <p>
        Question <strong>{index + 1}</strong> of {question}
      </p>
      <p>
        {points} of {maxPossiblePoints}
      </p>
    </header>
  );
}
