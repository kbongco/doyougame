import React, { useState } from "react";

export default function Questions(props) {
  const { questions } = props;
  console.log(questions.results.length)
  console.log(questions.results[0].question)
  console.log(questions.results[0].incorrect_answers)
  console.log(props);
  const [currentQuestion, setCurrentQuestion] = useState(0)

  return (
    <>
      <div className="question-container">

        <div className='question'>
          <p>{questions.results[currentQuestion].question}</p>
        </div>
        <div className='total-questions'>
          <span>Question {currentQuestion + 1}</span>/{questions.results.length}
        </div>
        <div className='answers-container'>
          <div className='answers'>
            <p>{questions.results[currentQuestion].correct_answer}</p>
            <div className='incorrect'>
              {questions.results[currentQuestion].incorrect_answers.map((incorrect) => <p>{incorrect.incorrect_answers}</p>)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
