import React from "react";
import "./Welcome.css";

export default function Welcome() {
  return (
    <div className="container">
      <h1 className="think">Think you got this?</h1>
      <p>
        This is a neat little trivia game involving video games, think you can
        get a high score and not get three in a row wrong?
      </p>
      <div className="button-container">
        <button className="go">Ready steady GO!</button>
        <button className='go'>View High Scores</button>
      </div>
    </div>
  );
}
