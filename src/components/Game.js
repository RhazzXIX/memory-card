import { useEffect, useState } from "react";
import uniqid from "uniqid";
import Card from "./Card";

import Naruto from "../images/naruto.webp";
import Sasuke from "../images/sasuke.webp";
import Goku from "../images/goku.webp";
import Vegeta from "../images/vegeta.webp";
import Luffy from "../images/luffy.webp";
import Zoro from "../images/zoro.webp";
import Eren from "../images/eren.webp";
import Mikasa from "../images/mikasa.webp";
import Light from "../images/light.webp";
import Lawliet from "../images/lawliet.webp";
import Edward from "../images/edward.webp";
import Alphonse from "../images/alphonse.webp";
import Saitama from "../images/saitama.webp";
import Genos from "../images/genos.webp";
import Kirito from "../images/kirito.webp";
import Asuna from "../images/asuna.webp";
import Midoriya from "../images/midoriya.webp";
import Bakugo from "../images/bakugo.webp";
import Tanjiro from "../images/tanjiro.webp";
import Nezuko from "../images/nezuko.webp";
import Ken from "../images/ken.webp";
import Touka from "../images/touka.webp";
import Gon from "../images/gon.webp";
import Killua from "../images/killua.webp";
import Rintaro from "../images/rintaro.webp";
import Makise from "../images/makise.webp";

function Game(props) {
  const { updateScores, resetScore, score } = props;

  const [narutoIsClicked, setClickNaruto] = useState(false);
  const [sasukeIsClicked, setClickSasuke] = useState(false);
  const [gokuIsClicked, setClickGoku] = useState(false);
  const [vegetaIsClicked, setClickVegeta] = useState(false);
  const [luffyIsClicked, setClickLuffy] = useState(false);
  const [zoroIsClicked, setClickZoro] = useState(false);
  const [erenIsClicked, setClickEren] = useState(false);
  const [mikasaIsClicked, setClickMikasa] = useState(false);
  const [lightIsClicked, setClickLight] = useState(false);
  const [lawlietIsClicked, setClickLawliet] = useState(false);
  const [edwardIsClicked, setClickEdward] = useState(false);
  const [alphonseIsClicked, setClickAlphonse] = useState(false);
  const [saitamaIsClicked, setClickSaitama] = useState(false);
  const [genosIsClicked, setClickGenos] = useState(false);
  const [kiritoIsClicked, setClickKirito] = useState(false);
  const [asunaIsClicked, setClickAsuna] = useState(false);
  const [midoriyaIsClicked, setClickMidoriya] = useState(false);
  const [bakugoIsClicked, setClickBakugo] = useState(false);
  const [tanjiroIsClicked, setClickTanjiro] = useState(false);
  const [nezukoIsClicked, setClickNezuko] = useState(false);
  const [kenIsClicked, setClickKen] = useState(false);
  const [toukaIsClicked, setClickTouka] = useState(false);
  const [gonIsClicked, setClickGon] = useState(false);
  const [killuaIsClicked, setClickKillua] = useState(false);
  const [rintaroIsClicked, setClickRintaro] = useState(false);
  const [makiseIsClicked, setClickMakise] = useState(false);

  const animeCharsArray = [
    {
      name: "Naruto",
      id: uniqid(),
      clicked: setClickNaruto,
      isClicked: narutoIsClicked,
      img: Naruto,
    },
    {
      name: "Sasuke",
      id: uniqid(),
      clicked: setClickSasuke,
      isClicked: sasukeIsClicked,
      img: Sasuke,
    },
    {
      name: "Goku",
      id: uniqid(),
      clicked: setClickGoku,
      isClicked: gokuIsClicked,
      img: Goku,
    },
    {
      name: "Vegeta",
      id: uniqid(),
      clicked: setClickVegeta,
      isClicked: vegetaIsClicked,
      img: Vegeta,
    },
    {
      name: "Luffy",
      id: uniqid(),
      clicked: setClickLuffy,
      isClicked: luffyIsClicked,
      img: Luffy,
    },
    {
      name: "Zoro",
      id: uniqid(),
      clicked: setClickZoro,
      isClicked: zoroIsClicked,
      img: Zoro,
    },
    {
      name: "Eren",
      id: uniqid(),
      clicked: setClickEren,
      isClicked: erenIsClicked,
      img: Eren,
    },
    {
      name: "Mikasa",
      id: uniqid(),
      clicked: setClickMikasa,
      isClicked: mikasaIsClicked,
      img: Mikasa,
    },
    {
      name: "Light Yagami",
      id: uniqid(),
      clicked: setClickLight,
      isClicked: lightIsClicked,
      img: Light,
    },
    {
      name: "L",
      id: uniqid(),
      clicked: setClickLawliet,
      isClicked: lawlietIsClicked,
      img: Lawliet,
    },
    {
      name: "Edward",
      id: uniqid(),
      clicked: setClickEdward,
      isClicked: edwardIsClicked,
      img: Edward,
    },
    {
      name: "Alphonse",
      id: uniqid(),
      clicked: setClickAlphonse,
      isClicked: alphonseIsClicked,
      img: Alphonse,
    },
    {
      name: "Kirito",
      id: uniqid(),
      clicked: setClickKirito,
      isClicked: kiritoIsClicked,
      img: Kirito,
    },
    {
      name: "Asuna",
      id: uniqid(),
      clicked: setClickAsuna,
      isClicked: asunaIsClicked,
      img: Asuna,
    },
    {
      name: "Saitama",
      id: uniqid(),
      clicked: setClickSaitama,
      isClicked: saitamaIsClicked,
      img: Saitama,
    },
    {
      name: "Genos",
      id: uniqid(),
      clicked: setClickGenos,
      isClicked: genosIsClicked,
      img: Genos,
    },
    {
      name: "Midoriya",
      id: uniqid(),
      clicked: setClickMidoriya,
      isClicked: midoriyaIsClicked,
      img: Midoriya,
    },
    {
      name: "Bakugo",
      id: uniqid(),
      clicked: setClickBakugo,
      isClicked: bakugoIsClicked,
      img: Bakugo,
    },
    {
      name: "Tanjiro",
      id: uniqid(),
      clicked: setClickTanjiro,
      isClicked: tanjiroIsClicked,
      img: Tanjiro,
    },
    {
      name: "Nezuko",
      id: uniqid(),
      clicked: setClickNezuko,
      isClicked: nezukoIsClicked,
      img: Nezuko,
    },
    {
      name: "Kaneki",
      id: uniqid(),
      clicked: setClickKen,
      isClicked: kenIsClicked,
      img: Ken,
    },
    {
      name: "Touka",
      id: uniqid(),
      clicked: setClickTouka,
      isClicked: toukaIsClicked,
      img: Touka,
    },
    {
      name: "Gon",
      id: uniqid(),
      clicked: setClickGon,
      isClicked: gonIsClicked,
      img: Gon,
    },
    {
      name: "Killua",
      id: uniqid(),
      clicked: setClickKillua,
      isClicked: killuaIsClicked,
      img: Killua,
    },
    {
      name: "Okabe",
      id: uniqid(),
      clicked: setClickRintaro,
      isClicked: rintaroIsClicked,
      img: Rintaro,
    },
    {
      name: "Kurisu",
      id: uniqid(),
      clicked: setClickMakise,
      isClicked: makiseIsClicked,
      img: Makise,
    },
  ];

  const [animeChars, setAnimeChars] = useState([
    {
      name: "Gon",
      id: uniqid(),
      clicked: setClickGon,
      isClicked: gonIsClicked,
      img: Gon,
    },
    {
      name: "Killua",
      id: uniqid(),
      clicked: setClickKillua,
      isClicked: killuaIsClicked,
      img: Killua,
    },
    {
      name: "Okabe",
      id: uniqid(),
      clicked: setClickRintaro,
      isClicked: rintaroIsClicked,
      img: Rintaro,
    },
    {
      name: "Kurisu",
      id: uniqid(),
      clicked: setClickMakise,
      isClicked: makiseIsClicked,
      img: Makise,
    },
  ]);

  const [randomNumArray, setRandomNumsArr] = useState([0, 1, 2, 3]);

  function generateRandomNums() {
    const randomNums = [];
    if (score <= 4) {
      while (randomNums.length < 4) {
        const num = Math.floor(Math.random() * 26);
        if (!randomNums.includes(num)) randomNums.push(num);
      }
    }
    if (score < 11 && score > 2) {
      while (randomNums.length < 12) {
        const num = Math.floor(Math.random() * 26);
        if (!randomNums.includes(num)) randomNums.push(num);
      }
    }
    if (score > 10) {
      while (randomNums.length < 26) {
        const num = Math.floor(Math.random() * 26);
        if (!randomNums.includes(num)) randomNums.push(num);
      }
    }
    setRandomNumsArr(randomNums);
  }

  function updateClickedChars() {
    let newCharArray = [];
    newCharArray.push(animeCharsArray[randomNumArray[0]]);
    newCharArray.push(animeCharsArray[randomNumArray[1]]);
    newCharArray.push(animeCharsArray[randomNumArray[2]]);
    newCharArray.push(animeCharsArray[randomNumArray[3]]);
    if (score >= 4) {
      newCharArray.push(animeCharsArray[randomNumArray[4]]);
      newCharArray.push(animeCharsArray[randomNumArray[5]]);
      newCharArray.push(animeCharsArray[randomNumArray[6]]);
      newCharArray.push(animeCharsArray[randomNumArray[7]]);
      newCharArray.push(animeCharsArray[randomNumArray[8]]);
      newCharArray.push(animeCharsArray[randomNumArray[9]]);
      newCharArray.push(animeCharsArray[randomNumArray[10]]);
      newCharArray.push(animeCharsArray[randomNumArray[11]]);
      if (score > 11) {
        newCharArray.push(animeCharsArray[randomNumArray[12]]);
        newCharArray.push(animeCharsArray[randomNumArray[13]]);
        newCharArray.push(animeCharsArray[randomNumArray[14]]);
        newCharArray.push(animeCharsArray[randomNumArray[15]]);
        newCharArray.push(animeCharsArray[randomNumArray[16]]);
        newCharArray.push(animeCharsArray[randomNumArray[17]]);
        newCharArray.push(animeCharsArray[randomNumArray[18]]);
        newCharArray.push(animeCharsArray[randomNumArray[19]]);
        newCharArray.push(animeCharsArray[randomNumArray[20]]);
        newCharArray.push(animeCharsArray[randomNumArray[21]]);
        newCharArray.push(animeCharsArray[randomNumArray[22]]);
        newCharArray.push(animeCharsArray[randomNumArray[23]]);
        newCharArray.push(animeCharsArray[randomNumArray[24]]);
        newCharArray.push(animeCharsArray[randomNumArray[25]]);
      }
    }

    setAnimeChars(newCharArray);
  }

  function resetAnimeClickState() {
    setClickNaruto(false);
    setClickSasuke(false);
    setClickGoku(false);
    setClickVegeta(false);
    setClickLuffy(false);
    setClickZoro(false);
    setClickEren(false);
    setClickMikasa(false);
    setClickLight(false);
    setClickLawliet(false);
    setClickEdward(false);
    setClickAlphonse(false);
    setClickSaitama(false);
    setClickGenos(false);
    setClickKirito(false);
    setClickAsuna(false);
    setClickMidoriya(false);
    setClickBakugo(false);
    setClickTanjiro(false);
    setClickNezuko(false);
    setClickKen(false);
    setClickTouka(false);
    setClickGon(false);
    setClickKillua(false);
    setClickMakise(false);
    setClickRintaro(false);
  }

  useEffect(() => {
    updateClickedChars();
    generateRandomNums();
  }, [
    narutoIsClicked,
    sasukeIsClicked,
    gokuIsClicked,
    vegetaIsClicked,
    luffyIsClicked,
    zoroIsClicked,
    erenIsClicked,
    mikasaIsClicked,
    lightIsClicked,
    lawlietIsClicked,
    edwardIsClicked,
    alphonseIsClicked,
    saitamaIsClicked,
    genosIsClicked,
    kiritoIsClicked,
    asunaIsClicked,
    midoriyaIsClicked,
    bakugoIsClicked,
    tanjiroIsClicked,
    nezukoIsClicked,
    kenIsClicked,
    toukaIsClicked,
    gonIsClicked,
    killuaIsClicked,
    makiseIsClicked,
    rintaroIsClicked,
  ]);

  let cardHolder;

  switch (true) {
    case score >= 5 && score <= 12:
      cardHolder = (
        <div id="card-holder">
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[0]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[1]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[2]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[3]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[4]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[5]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[6]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[7]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[8]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[9]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[10]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[11]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
        </div>
      );
      break;
    case score > 12:
      cardHolder = (
        <div id="card-holder">
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[0]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[1]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[2]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[3]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[4]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[5]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[6]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[7]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[8]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[9]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[10]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[11]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[12]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[13]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[14]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[15]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[16]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[17]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[18]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[19]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[20]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[21]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[22]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[23]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[24]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[25]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
        </div>
      );
      break;
    default:
      cardHolder = (
        <div id="card-holder">
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[0]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[1]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[2]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
          <Card
            resetScore={resetScore}
            updateScores={updateScores}
            char={animeChars[3]}
            generateNums={generateRandomNums}
            resetClick={resetAnimeClickState}
          />
        </div>
      );
  }

  return cardHolder;
}

export default Game;
