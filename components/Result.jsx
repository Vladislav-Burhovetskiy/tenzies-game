import React, { useEffect, useState } from "react";

export default function Result(props) {
  const [bestResult, setBestResult] = useState(0);
  const [bestTime, setBestTime] = useState(0)
  const { count, time, tenzies } = props;

  useEffect(() => {
    setBestResult((bestResult) => {
      return tenzies &&
        (bestResult === 0 || (bestResult !== 0 && count < bestResult))
        ? count
        : bestResult;
    });

    setBestTime((bestTime) => {
      return tenzies &&
        (bestTime === 0 || (bestTime !== 0 && time < bestTime))
        ? time
        : bestTime;
    });
  });

  return (
    <div className="result-container">
      <div className="best-result">
        <h2>Best result</h2>
        <p>Number Rolls: {bestResult}</p>
        <p>Best time: {bestTime} sec</p>
      </div>
      <div className="current-result">
        <h2>Current result</h2>
        <p>Number Rolls: {count}</p>
        <p>Current time: {time} sec</p>
      </div>
    </div>
  );
}
