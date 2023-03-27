import { useEffect, useState } from "react";
import uniqid from "uniqid";
import Card from "./Card";

function Game(props) {
  const { updateScores, resetScore, score } = props;

  const [narutoIsClicked, setClickNaruto] = useState(false);
  const [gokuIsClicked, setClickGoku] = useState(false);
  const [vegetaIsClicked, setClickVegeta] = useState(false);
  const [luffyIsClicked, setClickLuffy] = useState(false);

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

  const [randomNumArray, setRandomNumsArr] = useState([0, 1, 2, 3]);

  function generateRandomNums() {
    const randomNums = [];
    if (score < 100) {
      while (randomNums.length < 4) {
        const num = Math.floor(Math.random() * 4);
        if (!randomNums.includes(num)) randomNums.push(num);
      }
    }
    setRandomNumsArr(randomNums);
  }

  useEffect(() => {
    generateRandomNums();
  }, []);

  function updateClickedChars() {
    setAnimeChars([
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
  }

  useEffect(() => {
    updateClickedChars();
  }, [narutoIsClicked, gokuIsClicked, vegetaIsClicked, luffyIsClicked]);

  return (
    <div id="card-holder">
      <Card
        resetScore={resetScore}
        updateScores={updateScores}
        char={animeChars[randomNumArray[0]]}
        generateNums={generateRandomNums}
      />
    </div>
  );
}

export default Game;
