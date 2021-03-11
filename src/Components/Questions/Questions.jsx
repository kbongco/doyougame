import React, { useState } from "react";

export default function Questions(props) {
  const { questions } = props;
  console.log(questions.results[0].question)
  console.log(props);
  const [currentQuestion, setCurrentQuestion] = useState(0)

  return (
    <>
      <div className="question-container">
        <div className='question'>
          <p>{questions.results[currentQuestion].question}</p>
        </div>
      </div>
    </>
  );
}
