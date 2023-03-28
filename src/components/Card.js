import '../styles/Card.css'

function Card(props) {
  const { char, updateScores, resetScore, resetClick } = props;

  function runGame(e) {
    if (char.isClicked) {
      resetScore();
      resetClick();
      return;
    }
    char.clicked(true);
    updateScores();
  }

  return (
    <div className="card" onClick={runGame}>
      <img src={char.img} alt={char.name} />
      <h4>{char.name}</h4>
    </div>
  );
}

export default Card;
