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
      text: "Are you comfortable playing outdoors?",
      options: [
        { Answer: 0, text: "Strongly Agree", isCorrect: true },
        { Answer: 1, text: "Somewhat Agree", isCorrect: true },
        { Answer: 2, text: "Somewhat Disagree", isCorrect: false },
        { Answer: 3, text: "Strongly Disagree", isCorrect: false },
      ],
    },
    {
      text: "Are you a good team player?",
      options: [
        { Answer: 0, text: "Strongly Agree", isCorrect: true },
        { Answer: 1, text: "Somewhat Agree", isCorrect: true },
        { Answer: 2, text: "Somewhat Disagree", isCorrect: false },
        { Answer: 3, text: "Strongly Disagree", isCorrect: false },
      ],
    },
    {
      text: "Are you an athletic person?",
      options: [
        { Answer: 0, text: "Strongly Agree", isCorrect: true },
        { Answer: 1, text: "Somewhat Agree", isCorrect: true },
        { Answer: 2, text: "Somewhat Disagree", isCorrect: false },
        { Answer: 3, text: "Strongly Disagree", isCorrect: false },
      ],
    },
    {
      text: "Would you consider yourself focused?",
      options: [
        { Answer: 0, text: "Strongly Agree", isCorrect: true },
        { Answer: 1, text: "Somewhat Agree", isCorrect: true },
        { Answer: 2, text: "Somewhat Disagree", isCorrect: false },
        { Answer: 3, text: "Strongly Disagree", isCorrect: false },
      ],
    },
    {
      text: "You have good hand-eye coordination?",
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
      Sports Questions
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
            {(score === 0) && <> the hobby recommended would be .</>} 
            {(score === 1) && <> the hobby recommended would be Volleyball.</>} 
            {(score === 2) && <> the hobby recommended would be Table Tennis.</>} 
            {(score === 3) && <> the hobby recommended would be Basketball.</>} 
            {(score === 4) && <> the hobby recommended would be Kickboxing.</>} 
            {(score === 5) && <> the hobby recommended would be Soccer.</>} 
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
        <div className={styles.sportsBackgroundImg}>
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