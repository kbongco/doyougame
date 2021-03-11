import React, { useState } from "react";
import "./Welcome.css";

export default function Welcome() {
  const [start, setStart] = useState(false);
  const [highScores, setHighScores] = useState(false);
  const [back, setBack] = useState(false);

  if (start !== false) {
    return <h1>Oh no</h1>;
  }

  if (highScores !== false) {
    return (
      <>
        <h1>High Scores, you're not worthy</h1>
        <p>Think you can get on this scoreboard? Click on the button and start the game :)</p>
        <button id='start-here' onClick={(e) => setStart(!start)}>
          Ready steady GO!
        </button>
      </>
    );
  }
  return (
    <div className="container">
      <h1 className="think">Think you got this?</h1>
      <p>
        This is a neat little trivia game involving video games, think you can
        get a high score and not get three in a row wrong?
      </p>
      <div className="button-container">
        <button className="go" onClick={(e) => setStart(!start)}>
          Ready steady GO!
        </button>
        <button className="go" onClick={(e) => setHighScores(!highScores)}>
          View High Scores
        </button>
      </div>
    </div>
  );
}
