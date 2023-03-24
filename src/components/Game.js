import { useState } from "react";
import uniqid from "uniqid";

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
      click: setClickNaruto,
      isClicked: narutoIsClicked,
    },
    {
      name: "Goku",
      id: uniqid(),
      click: setClickGoku,
      isClicked: gokuIsClicked,
    },
    {
      name: "Luffy",
      id: uniqid(),
      click: setClickLuffy,
      isClicked: luffyIsClicked,
    },
    {
      name: "Vegeta",
      id: uniqid(),
      click: setClickVegeta,
      isCicked: vegetaIsClicked,
    },
  ]);

  const card = (
    <div>
      {animeChars.map((char) => {
        return <div key={char.id}>{char.name}</div>;
      })}
    </div>
  );

  return <div id="game">{card}</div>;
}

export default Game;
