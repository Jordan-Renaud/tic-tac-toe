import Square from "./Square";
import { useState } from "react";
import "./App.css";

function App() {
  const [currentEmoji, setCurrentEmoji] = useState("🐱");
  const [gameBoard, setGameBoard] = useState(new Array(9).fill(""));

  function setSquareEmoji(index) {
    setGameBoard(ToNewGameBoard(index));
  }

  function updateEmojiForNext(emoji) {
    setCurrentEmoji(emoji === "🐱" ? "🐶" : "🐱");
  }

  function ToNewGameBoard(index) {
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
    </div>
  );
}

export default App;
