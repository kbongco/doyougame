import React, { useState, useEffect} from "react";
import "./Welcome.css";
import axios from "axios";
import Questions from "../../Components/Questions/Questions";

export default function Welcome() {
  const [start, setStart] = useState(false);
  const [highScores, setHighScores] = useState(false);
  const [back, setBack] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const questionAPIURL = "https://opentdb.com/api.php?amount=10&category=15";
    const apiCall = async () => {
      const response = await axios(questionAPIURL);
      setQuestions(response.data);
      console.log(response.data.results[0].question);
    };
    apiCall();
  }, []);

  if (start !== false) {
    return <Questions questions={questions}/>;
  }

  if (highScores !== false) {
    return (
      <>
        <h1>High Scores, you're not worthy</h1>
        <p>
          Think you can get on this scoreboard? Click on the button and start
          the game :)
        </p>
        <button id="start-here" onClick={(e) => setStart(!start)}>
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
