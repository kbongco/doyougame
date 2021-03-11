import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Welcome from './Screens/WelcomeScreen/Welcome'

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
      <h1 className='header'>Do you game?</h1>
      <Welcome/>
    </div>
  );
}

export default App;
