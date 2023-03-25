import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square";

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ]);
  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [gameOver, setGameOver] = useState(false);
  const [gameResult, setGameResult] = useState("");

  const handleGamePlay = (index) => {
    if (gameOver) {
      return;
    }

    let updatedBoard = [...board];

    if (index === treasureLocation) {
      updatedBoard[index] = "💎";
      setBoard(updatedBoard);
      setGameOver(true);
      setGameResult("You win!");
    } else if (index === bombLocation) {
      updatedBoard[index] = "💣";
      setBoard(updatedBoard);
      setGameOver(true);
      setGameResult("You lose!");
    } else {
      updatedBoard[index] = "🏝️";
      setBoard(updatedBoard);
    }
  };

  const resetGame = () => {
    setBoard([
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?",
      "?"
    ]);
    setTreasureLocation(Math.floor(Math.random() * board.length));
    setBombLocation(Math.floor(Math.random() * board.length));
    setGameOver(false);
    setGameResult("");
  };

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameBoard">
        {board.map((value, index) => {
          return (
            <Square
              value={value}
              key={index}
              index={index}
              handleGamePlay={handleGamePlay}
            />
          );
        })}
      </div>
      {gameOver && (
        <div className="gameResult">
          <h2>{gameResult}</h2>
          <button className="resetGameButton" onClick={resetGame}>Reset Game</button>
        </div>
      )}
    </>
  );
};

export default App;