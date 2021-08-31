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
      updateEmojiForNext(currentEmoji);
    }
    return newGameBoard;
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
