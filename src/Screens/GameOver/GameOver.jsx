import React, { useState } from "react";
import "./GameOver.css";
import Welcome from "./Welcome/Welcome/jsx";
import Questions from "../../Components/Questions/Questions";

export default function GameOver() {
  const [startOver, setStartOver] = useState(false);
  const [returnMenu, setReturnMenu] = useState(false);

  if (returnMenu !== false) {
    return <Welcome />;
  }

  if (startOver !== false) {
    return <Questions />;
  }

  return (
    <>
      <h1 className="game">GAME OVER</h1>
      <p className="continue">Start over?</p>
      <div className="buttons">
        <button className="yes" onClick={(e) => setStartOver(!startOver)}>
          Yes
        </button>
        <button className="no" onClick={(e) => setReturnMenu(!returnMenu)}>
          No
        </button>
      </div>
    </>
  );
}
