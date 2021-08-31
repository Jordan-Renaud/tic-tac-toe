import Square from "./Square";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Tic Tac Toe</h1>
      <h2 className="whose-turn">🐱's Turn</h2>

      <div className="container">
        <Square emoji="" />
        <Square emoji="" />
        <Square emoji="" />
        <Square emoji="🐱" />
        <Square emoji="🐱" />
        <Square emoji="🐱" />
        <Square emoji="🐶" />
        <Square emoji="🐶" />
        <Square emoji="🐶" />
      </div>
    </div>
  );
}

export default App;
