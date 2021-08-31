import Square from "./Square";
import { useState } from "react";
import "./App.css";

function App() {
  const [currentEmoji, setCurrentEmoji] = useState("🐱");
  const [gameBoard, setGameBoard] = useState(resetBoard());

  function resetBoard() {
    return new Array(9).fill("");
  }

  function setSquareEmoji(index) {
    setGameBoard(toNewGameBoard(index));
  }

  function updateEmojiForNext(emoji) {
    setCurrentEmoji(emoji === "🐱" ? "🐶" : "🐱");
  }

  function toNewGameBoard(index) {
    let newGameBoard = gameBoard;

    if (newGameBoard[index] === "") {
      newGameBoard[index] = currentEmoji;
      if (someoneHasWon(newGameBoard)) {
        console.log("win");
      }

      updateEmojiForNext(currentEmoji);
    }
    return newGameBoard;
  }

  function someoneHasWon(gameBoard) {
    //horizontal checks
    if (
      (gameBoard[0] !== "" &&
        gameBoard[0] === gameBoard[1] &&
        gameBoard[0] === gameBoard[2]) ||
      (gameBoard[3] !== "" &&
        gameBoard[3] === gameBoard[4] &&
        gameBoard[3] === gameBoard[5]) ||
      (gameBoard[6] !== "" &&
        gameBoard[6] === gameBoard[7] &&
        gameBoard[6] === gameBoard[8])
    )
      return true;

    //vertical checks
    if (
      (gameBoard[0] !== "" &&
        gameBoard[0] === gameBoard[3] &&
        gameBoard[0] === gameBoard[6]) ||
      (gameBoard[1] !== "" &&
        gameBoard[1] === gameBoard[4] &&
        gameBoard[1] === gameBoard[7]) ||
      (gameBoard[2] !== "" &&
        gameBoard[2] === gameBoard[5] &&
        gameBoard[2] === gameBoard[8])
    )
      return true;
    //diagonal checks
    if (
      (gameBoard[0] !== "" &&
        gameBoard[0] === gameBoard[4] &&
        gameBoard[0] === gameBoard[8]) ||
      (gameBoard[2] !== "" &&
        gameBoard[2] === gameBoard[4] &&
        gameBoard[2] === gameBoard[6])
    )
      return true;

    return false;
  }

  return (
    <div className="App">
      <h1 className="title">Tic Tac Toe</h1>
      <h2 className="whose-turn">{`${currentEmoji}'s Turn`}</h2>

      <div className="container">
        {gameBoard.map((emojiChoice, index) => (
          <Square
            key={index}
            index={index}
            emoji={emojiChoice}
            clickHandler={setSquareEmoji}
          />
        ))}
      </div>
      <button className="new-game" onClick={() => setGameBoard(resetBoard())}>
        Reset Game
      </button>
    </div>
  );
}

export default App;
