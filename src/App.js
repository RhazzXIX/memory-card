import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Win from "./components/Win";

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

  let winner = null;

  if (score === 26) winner = <Win />;

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
        <Game
          score={score}
          updateScores={updateScores}
          resetScore={resetScore}
        />
      </main>
      <footer>
        <a href="https://github.com/RhazzXIX">
          <img alt="GitHub Profile"></img>
        </a>
      </footer>
      {winner}
    </div>
  );
}

export default App;
