import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Square from "./Square";
import "./App.css";

function App() {
  const newGameBoard = () => new Array(9).fill("");

  const [currentEmoji, setCurrentEmoji] = useState("🐱");
  const [gameBoard, setGameBoard] = useState(newGameBoard);
  const [gameHasBeenWon, setGameHasBeenWon] = useState(false);
  const [catScore, setCatScore] = useState(0);
  const [dogScore, setDogScore] = useState(0);
  const [winningEmoji, setWinningEmoji] = useState("");

  useEffect(() => {
    updateScore(winningEmoji);
  }, [winningEmoji]);

  function setSquareEmoji(squareIndex) {
    setGameBoard(toUpdatedGameBoard(squareIndex));
  }

  function toUpdatedGameBoard(index) {
    let updatedGameBoard = gameBoard;

    if (updatedGameBoard[index] === "") {
      updatedGameBoard[index] = currentEmoji;

      if (someoneHasWon(updatedGameBoard)) {
        setGameHasBeenWon(true);
        setWinningEmoji(updatedGameBoard[index]);
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
    ) {
      return true;
    }

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

  function updateScore(winningEmoji) {
    if (winningEmoji === "") return;
    winningEmoji === "🐱"
      ? setCatScore(catScore + 1)
      : setDogScore(dogScore + 1);
  }

  function showCelebrationIf(someoneWon) {
    return someoneWon ? (
      <Confetti
        className="confetti"
        width={"500px"}
        height={"570px"}
        recycle={false}
      />
    ) : (
      <></>
    );
  }

  function resetBoard() {
    setGameBoard(newGameBoard);
    setGameHasBeenWon(false);
    setWinningEmoji("");
  }

  return (
    <div className="App">
      <h1 className="title">Tic Tac Toe</h1>
      <h2 className="whose-turn">{`${currentEmoji}'s Turn`}</h2>
      <div className="flex-container">
        <div className="empty-div"></div>
        <div className="grid-container">
          {gameBoard.map((emojiChoice, index) => (
            <Square
              key={index}
              index={index}
              emoji={emojiChoice}
              clickHandler={setSquareEmoji}
            />
          ))}
        </div>

        <div className="score-container">
          <h3>Score:</h3>
          <p>🐱= {catScore}</p>
          <p>🐶= {dogScore}</p>
        </div>
      </div>

      {showCelebrationIf(gameHasBeenWon)}
      <button className="new-game" onClick={resetBoard}>
        Reset Game
      </button>
    </div>
  );
}

export default App;
