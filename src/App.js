import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Welcome from './Screens/WelcomeScreen/Welcome'

function App() {

  return (
    <div className="App">
      <h1 className='header'>Do you game?</h1>
      <Welcome />
    </div>
  );
}

export default App;
