import { useState } from "react";
import "./App.css";
import Game from "./components/Game";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const updateScores = (e) => {
    setScore(score + 1);
    if (score >= bestScore) setBestScore(score + 1);
  };

  const resetScore = (e) => {
    setScore(0);
  };

  return (
    <div className="App">
      <header>
        <h1>Anime Memory Game</h1>
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </header>
      <main>
        <h4>
          Get points by clicking on an image. Don't click on an image twice
        </h4>
        <div onClick={updateScores}>Naruto</div>
        <button onClick={resetScore}>reset</button>
        <Game score={score} updateScores={updateScores} resetScore={resetScore} />
      </main>
      <footer>
        <a href="https://github.com/RhazzXIX">
          <img alt="GitHub Profile"></img>
        </a>
      </footer>
    </div>
  );
}

export default App;
