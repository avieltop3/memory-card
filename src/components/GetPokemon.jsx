import { useEffect, useState } from "react";
import Card from "./Card";
import "./GetPokemon.css";

export default function GetPokemon({
  gameOver,
  setGameOver,
  answerArray,
  setAnswerArray,
  score,
  setScore,
  highScore,
  setHighScore,
}) {
  const [data, setData] = useState([]);
  // const [gameOver, setGameOver] = useState(true);
  // const [answerArray, setAnswerArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=20"
      );
      const newData = await response.json();

      const pokeData = await newData.results;

      const pokeURL = await Promise.all(
        pokeData.map(async (pd) => {
          const response = await fetch(pd.url);
          return response.json();
        })
      );

      setData(pokeURL);
      console.log(data[0]);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log(answerArray);
  // }, [answerArray]);

  function getRandomPokemonArray(data) {
    let pokeArray = [];

    while (pokeArray.length <= 3) {
      // Get a random number from the data array
      let randomPokemonArray = Math.floor(Math.random() * data.length);

      // if number is already in array, get another number again
      if (pokeArray.includes(randomPokemonArray)) {
        randomPokemonArray = Math.floor(Math.random() * data.length);
      }

      // push to the array
      pokeArray.push(randomPokemonArray);
      console.log(pokeArray);
    }
    return pokeArray;
  }

  if (data.length > 0) {
    if (!gameOver) {
      let pokeArray = getRandomPokemonArray(data);
      return (
        <div className="game">
          {pokeArray.map((array, index) => (
            <Card
              image={data[array].sprites.front_default}
              key={index}
              name={data[array].name}
              onClick={() => {
                answerArray.includes(array)
                  ? setGameOver(!gameOver)
                  : (setAnswerArray((prev) => [...prev, array]),
                    setScore(score + 1));
              }}
            />
          ))}
        </div>
      );
    }
    return (
      <>
        <p>GAME OVER!</p>
        <button
          onClick={() => {
            setGameOver(!gameOver);
            setAnswerArray([]);
            setHighScore(score);
            setScore(0);
          }}
        >
          Try Again
        </button>
      </>
    );
  }
  return <>Loading from Pokemon API...</>;
}
