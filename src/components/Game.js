import { useEffect, useState } from "react";
import uniqid from "uniqid";
import Card from "./Card";

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
  const [makiseIsClicked, setClickMakise] = useState(false);
  const [rintaroIsClicked, setClickRintaro] = useState(false);

  const animeCharsArray = [
    {
      name: "Naruto",
      id: uniqid(),
      clicked: setClickNaruto,
      isClicked: narutoIsClicked,
    },
    {
      name: "Sasuke",
      id: uniqid(),
      clicked: setClickSasuke,
      isClicked: sasukeIsClicked,
    },
    {
      name: "Goku",
      id: uniqid(),
      clicked: setClickGoku,
      isClicked: gokuIsClicked,
    },
    {
      name: "Vegeta",
      id: uniqid(),
      clicked: setClickVegeta,
      isClicked: vegetaIsClicked,
    },
    {
      name: "Luffy",
      id: uniqid(),
      clicked: setClickLuffy,
      isClicked: luffyIsClicked,
    },
    {
      name: "Zoro",
      id: uniqid(),
      clicked: setClickZoro,
      isClicked: zoroIsClicked,
    },
    {
      name: "Eren",
      id: uniqid(),
      clicked: setClickEren,
      isClicked: erenIsClicked,
    },
    {
      name: "Mikasa",
      id: uniqid(),
      clicked: setClickMikasa,
      isClicked: mikasaIsClicked,
    },
    {
      name: "Light Yagami",
      id: uniqid(),
      clicked: setClickLight,
      isClicked: lightIsClicked,
    },
    {
      name: "L",
      id: uniqid(),
      clicked: setClickLawliet,
      isClicked: lawlietIsClicked,
    },
    {
      name: "Edward",
      id: uniqid(),
      clicked: setClickEdward,
      isClicked: edwardIsClicked,
    },
    {
      name: "Alphonse",
      id: uniqid(),
      clicked: setClickAlphonse,
      isClicked: alphonseIsClicked,
    },
    {
      name: "Kirito",
      id: uniqid(),
      clicked: setClickKirito,
      isClicked: kiritoIsClicked,
    },
    {
      name: "Asuna",
      id: uniqid(),
      clicked: setClickAsuna,
      isClicked: asunaIsClicked,
    },
    {
      name: "Saitama",
      id: uniqid(),
      clicked: setClickSaitama,
      isClicked: saitamaIsClicked,
    },
    {
      name: "Genos",
      id: uniqid(),
      clicked: setClickGenos,
      isClicked: genosIsClicked,
    },
    {
      name: "Midoriya",
      id: uniqid(),
      clicked: setClickMidoriya,
      isClicked: midoriyaIsClicked,
    },
    {
      name: "Bakugo",
      id: uniqid(),
      clicked: setClickBakugo,
      isClicked: bakugoIsClicked,
    },
    {
      name: "Tanjiro",
      id: uniqid(),
      clicked: setClickTanjiro,
      isClicked: tanjiroIsClicked,
    },
    {
      name: "Nezuko",
      id: uniqid(),
      clicked: setClickNezuko,
      isClicked: nezukoIsClicked,
    },
    {
      name: "Kaneki",
      id: uniqid(),
      isClicked: kenIsClicked,
      clicked: setClickKen,
    },
    {
      name: "Touka",
      id: uniqid(),
      clicked: setClickTouka,
      isClicked: toukaIsClicked,
    },
    {
      name: "Gon",
      id: uniqid(),
      isClicked: gonIsClicked,
      clicked: setClickGon,
    },
    {
      name: "Killua",
      id: uniqid(),
      clicked: setClickKillua,
      isClicked: killuaIsClicked,
    },
    {
      name: "Okabe",
      id: uniqid(),
      isClicked: rintaroIsClicked,
      clicked: setClickRintaro,
    },
    {
      name: "Kurisu",
      id: uniqid(),
      isClicked: makiseIsClicked,
      clicked: setClickMakise,
    },
  ];

  const [animeChars, setAnimeChars] = useState([
    {
      name: "Gon",
      id: uniqid(),
      clicked: gonIsClicked,
      isClicked: setClickGon,
    },
    {
      name: "Killua",
      id: uniqid(),
      clicked: killuaIsClicked,
      isClicked: setClickKillua,
    },
    {
      name: "Okabe",
      id: uniqid(),
      clicked: rintaroIsClicked,
      isClicked: setClickRintaro,
    },
    {
      name: "Kurisu",
      id: uniqid(),
      clicked: makiseIsClicked,
      isClicked: setClickMakise,
    },
  ]);

  const [randomNumArray, setRandomNumsArr] = useState([0, 1, 2, 3]);

  function generateRandomNums() {
    const randomNums = [];
    if (score < 100) {
      console.log("activated");
      while (randomNums.length < 4) {
        const num = Math.floor(Math.random() * 26);
        if (!randomNums.includes(num)) randomNums.push(num);
      }
    }
    setRandomNumsArr(randomNums);
  }

  function updateClickedChars() {
    let newArray = [];
    newArray.push(animeCharsArray[randomNumArray[0]]);
    newArray.push(animeCharsArray[randomNumArray[1]]);
    newArray.push(animeCharsArray[randomNumArray[2]]);
    newArray.push(animeCharsArray[randomNumArray[3]]);
    setAnimeChars(newArray);
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
    console.log(randomNumArray);
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

  return (
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
    </div>
  );
}

export default Game;
