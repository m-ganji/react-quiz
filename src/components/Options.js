import React from "react";

export default function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((items, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswered}
          key={items}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {items}
        </button>
      ))}
    </div>
  );
}
