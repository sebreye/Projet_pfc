import './App.css';
import React, { useState } from 'react';
import Choice from './components/Choice/Choice';
import Header from './components/Header/Header';
import Resultat from './components/Resultat/Resultat';
// import Rules from './components/Rules/Rules';

  function App() {
    const [userChoice, setUserChoice] = useState(null);
    const [systemChoice, setSystemChoice] = useState(null);
    const [verdict, setVerdict] = useState(null);
    const [score, setScore] = useState(0)

    function play(userChoice) {
      const choices = ["rock", "paper", "scissors"];
      const systemChoice = choices[Math.floor(Math.random() * choices.length)];

      const rules = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
      };

      if (userChoice === systemChoice) {
        setVerdict("It's a tie!");
      } else if (rules[userChoice] === systemChoice) {
        setVerdict("You win!");
        setScore(score + 1);
      } else {
        setVerdict("You lose!");
        setScore(score - 1);
      }

      setUserChoice(userChoice);
      setSystemChoice(systemChoice);
    }

    function playAgain() {
      setUserChoice(null);
      setSystemChoice(null);
      setVerdict(null);
    }

    return (
      <div className="App">
        <Header score={score}/>
        {userChoice === null ?
          <Choice onChoose={play} /> :
          <Resultat
            userChoice={userChoice}
            systemChoice={systemChoice}
            verdict={verdict}
            onPlayAgain={playAgain}
          />
        }
      </div>
    )
  }

  export default App;
