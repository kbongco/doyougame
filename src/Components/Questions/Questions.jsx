import React, { useState } from "react";
import GameOver from "../../Screens/GameOver/GameOver";

export default function Questions(props) {
  const { questions } = props;
  console.log(questions.results.length);
  console.log(questions.results[0].question);
  console.log(questions.results[0].incorrect_answers);
  console.log(props);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [totalWrong, setTotalWrong] = useState(0);

  if (totalWrong === 3) {
    return <GameOver />;
  }

  let correctAnswer = new Array(
    questions.results[currentQuestion].correct_answer
  );
  let inCorrectAnswers = questions.results[currentQuestion].incorrect_answers;
  let allAnswers = correctAnswer.concat(inCorrectAnswers).sort();
  console.log(allAnswers);
  console.log(allAnswers.length)

  return (
    <>
      <div className="question-container">
        <div className="total-questions">
          <span>Question {currentQuestion + 1}</span>/{questions.results.length}
        </div>

        <div className="question">
          <p>{questions.results[currentQuestion].question}</p>
        </div>

        <div className='answers-container'>
          {allAnswers.map((answer) => {
            return (
              <button>{answer}</button>
            )
          })}
        </div>
      </div>
    </>
  );
}
