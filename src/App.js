import Square from "./Square";
import { useState } from "react";
import Confetti from "react-confetti";
import "./App.css";

function App() {
  const newGameBoard = () => new Array(9).fill("");

  const [currentEmoji, setCurrentEmoji] = useState("🐱");
  const [gameBoard, setGameBoard] = useState(newGameBoard);
  const [gameHasBeenWon, setGameHasBeenWon] = useState(false);

  function setSquareEmoji(squareIndex) {
    setGameBoard(toUpdatedGameBoard(squareIndex));
  }

  function toUpdatedGameBoard(index) {
    let updatedGameBoard = gameBoard;

    if (updatedGameBoard[index] === "") {
      updatedGameBoard[index] = currentEmoji;

      if (someoneHasWon(updatedGameBoard)) {
        setGameHasBeenWon(true);
      }

      updateEmojiForNext(currentEmoji);
    }
    return updatedGameBoard;
  }

  function updateEmojiForNext(emoji) {
    setCurrentEmoji(emoji === "🐱" ? "🐶" : "🐱");
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

  function showCelebration(someoneWon) {
    return someoneWon ? (
      <Confetti
        className="confetti"
        width={"500px"}
        height={"580px"}
        recycle={false}
      />
    ) : (
      <></>
    );
  }

  function resetBoard() {
    setGameBoard(newGameBoard);
    setGameHasBeenWon(false);
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
      {showCelebration(gameHasBeenWon)}
      <button className="new-game" onClick={resetBoard}>
        Reset Game
      </button>
    </div>
  );
}

export default App;
