import React, { useState } from "react";
import HealthBar from "HealthBar";

export default function Questions(props) {
  const { questions } = props;
  console.log(questions.results[0].question);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentHP, setCurrentHP] = useState(100);
  const [wrongAnswerCount, setWrongAnswerCount] = useState(0);

  const healthPoints = [
    { bgcolor: green, healthRemaining: 100 },
    { bgcolor: yellow, healthRemaining: 66.3 },
    { bgcolor: red, healthRemaining: 33.3 },
  ];

  return (
    <>
      <div className="question-container">
        <div className="health-container">
          <HealthBar healthPoints={healthPoints} />
        </div>
        <div className="question">
          <p>{questions.results[currentQuestion].question}</p>
        </div>
      </div>
    </>
  );
}
