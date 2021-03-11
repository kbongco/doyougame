import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const questionAPIURL = 'https://opentdb.com/api.php?amount=10&category=15'
    const apiCall = async () => {
      const response = await axios(questionAPIURL);
      setQuestions(response.data);
      console.log(response.data.results)
    }
    apiCall();
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
