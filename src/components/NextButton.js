import React from "react";

export default function NextButton({ dispatch, answer, index, question }) {
  if (answer === null) return;

  if (index + 1 > question - 1) {
    return (
      <>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      </>
    );
  }

  console.log(index + 1, question);

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}
