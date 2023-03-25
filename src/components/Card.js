function Card(props) {
  const char = props.char;
  const updateScores = props.updateScores;
  const resetScore = props.resetScore;

  function runGame(e) {
    if (char.isClicked) {
      resetScore();
      return;
    }
    char.clicked(true);
    updateScores();
  }

  return (
    <div className="card" onClick={runGame}>
      <img alt={char.name} />
      <h4>{char.name}</h4>
    </div>
  );
}

export default Card;
