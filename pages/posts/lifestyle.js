import React, { useState } from "react";
import styles from '../../styles/Home.module.css'
import Router from 'next/router'

export default function Hobbies() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [str, setStr] = useState("");
  const questions = [
    {
      text: "Are you a visual person?",
      options: [
        { Answer: 0, text: "Strongly Agree", isCorrect: true },
        { Answer: 1, text: "Somewhat Agree", isCorrect: true },
        { Answer: 2, text: "Somewhat Disagree", isCorrect: false },
        { Answer: 3, text: "Strongly Disagree", isCorrect: false },
      ],
    },
    {
      text: "Are you a creative person?",
      options: [
        { Answer: 0, text: "Strongly Agree", isCorrect: true },
        { Answer: 1, text: "Somewhat Agree", isCorrect: true },
        { Answer: 2, text: "Somewhat Disagree", isCorrect: false },
        { Answer: 3, text: "Strongly Disagree", isCorrect: false },
      ],
    },
    {
      text: "How much time are you willing to commit to this hobby?",
      options: [
        { Answer: 0, text: "A vast amount of time each day", isCorrect: true },
        { Answer: 1, text: "A decent amount of time each day", isCorrect: true },
        { Answer: 2, text: "A bit of time each day", isCorrect: false },
        { Answer: 3, text: "Almost no time each day", isCorrect: false },
      ],
    },
    {
      text: "How much money are you willing to spend on this hobby?",
      options: [
        { Answer: 0, text: "Money is no object", isCorrect: true },
        { Answer: 1, text: "A decent amount of money", isCorrect: true },
        { Answer: 2, text: "On a budget", isCorrect: false },
        { Answer: 3, text: "Little to no money", isCorrect: false },
      ],
    },
    {
      text: "Do you prefer to do a hobby you can do on your own?",
      options: [
        { Answer: 0, text: "Strongly Agree", isCorrect: true },
        { Answer: 1, text: "Somewhat Agree", isCorrect: true },
        { Answer: 2, text: "Somewhat Disagree", isCorrect: false },
        { Answer: 3, text: "Strongly Disagree", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(prev => prev + 1);
    } 
    else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1 className={styles.title}>
      Lifestyle Questions
      </h1>
      {/* 3. Show results or show the question game  */}
      {showResults ? (
        
        /* 4. Final Results */
        <div className="final-results">
          <div className={styles.resultsBackgroundImg}>
          <h1>Final Results</h1>
          <h2>
             {/* Based on the score {score}.  */}
             Based on your answers, 
            {(score === 0) && <> the hobby recommended would be Babysitting.</>} 
            {(score === 1) && <> the hobby recommended would be Volunteering.</>} 
            {(score === 2) && <> the hobby recommended would be Gardening.</>} 
            {(score === 3) && <> the hobby recommended would be building an Aquarium.</>} 
            {(score === 4) && <> the hobby recommended would be Coding.</>} 
            {(score === 5) && <> the hobby recommended would be Home Renovation.</>} 
            <br/>
            {/* {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%) */}
          </h2>
          <div className={styles.grid}>
          {/* Restart Questionnaire */}
          <a className={styles.card}>
          <div onClick={() => restartGame()}>
            <h2>Restart Questionnaire</h2>
          </div>
          </a>
            {/* Back to home screen*/}
            <a className={styles.card}> 
            <div onClick={() => Router.back()}> 
            <h2>Home Screen</h2> 
            </div> 
           </a>
          </div>
          </div>
          </div>
      ) : (
        /* 5. Question Card  */
        <main className={styles.main}>
        <div className={styles.lifestyleBackgroundImg}>
        <div className={styles.grid}>
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}&nbsp;
          </h2>
          <h2>{questions[currentQuestion].text}</h2>

          {/* List of possible answers  */}
            {questions[currentQuestion].options.map((option) => {
              return (

                <a className={styles.card}
                  key={option.Answer}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </a>
              );
            })}
        </div>
        </div>
        </main>
      )}
    </div>
  );
}