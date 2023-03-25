import { useEffect, useState } from "react";
import uniqid from "uniqid";
import Card from "./Card";

function Game(props) {
  const { updateScores, resetScore, score } = props;

  const [narutoIsClicked, setClickNaruto] = useState(false);
  const [gokuIsClicked, setClickGoku] = useState(false);
  const [luffyIsClicked, setClickLuffy] = useState(false);
  const [vegetaIsClicked, setClickVegeta] = useState(false);

  const [animeChars, setAnimeChars] = useState([
    {
      name: "Naruto",
      id: uniqid(),
      clicked: setClickNaruto,
      isClicked: narutoIsClicked,
    },
    {
      name: "Goku",
      id: uniqid(),
      clicked: setClickGoku,
      isClicked: gokuIsClicked,
    },
    {
      name: "Luffy",
      id: uniqid(),
      clicked: setClickLuffy,
      isClicked: luffyIsClicked,
    },
    {
      name: "Vegeta",
      id: uniqid(),
      clicked: setClickVegeta,
      isClicked: vegetaIsClicked,
    },
  ]);

  return (
    <div id="card-holder">
      <Card
        resetScore={resetScore}
        updateScores={updateScores}
        char={animeChars[0]}
      />
    </div>
  );
}

export default Game;
