import { useState } from "react";

export default function Navbar({ score, setScore, highScore, setHighScore }) {
  return (
    <div>
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
}
