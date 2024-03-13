import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GetPokemon from "./components/GetPokemon";
import Navbar from "./components/Navbar";

function App() {
  const [gameOver, setGameOver] = useState(true);
  const [answerArray, setAnswerArray] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <Navbar
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
      <GetPokemon
        gameOver={gameOver}
        setGameOver={setGameOver}
        answerArray={answerArray}
        setAnswerArray={setAnswerArray}
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
      />
    </>
  );
}

export default App;
