import React from "react";

export default function Result({ input, errors, time, user }) {
  const minutes = time / 60;
  const wpm = Math.round(input.length / 5 / minutes);
  const accuracy = Math.max(
    0,
    Math.round(((input.length - errors) / input.length) * 100)
  );

  return (
    <div className="container mt-5 text-center">
      <h3>Result</h3>
      <p>User: {user}</p>
      <p>WPM: {wpm}</p>
      <p>Accuracy: {accuracy}%</p>
    </div>
  );
}
