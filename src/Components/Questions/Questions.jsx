import React, { useState } from "react";
import HealthBar from 'HealthBar'

export default function Questions(props) {
  const { questions } = props;
  console.log(questions.results[0].question)
  console.log(props);
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const healthPoints = [
    { bgcolor: green, completed: 100 },
    { bgcolor: yellow, completed: 66.3 },
    { bgcolor: red, completed: 33.0}
  ]

  return (
    <>
      <div className="question-container">
        <div className='health-container'>
          <HealthBar healthPoints={healthPoints}/>
        </div>
        <div className='question'>
          <p>{questions.results[currentQuestion].question}</p>
        </div>
      </div>
    </>
  );
}
