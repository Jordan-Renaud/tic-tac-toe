import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="title">Tic Tac Toe</h1>
      <h2 className="whose-turn">🐱's Turn</h2>

      <div className="container">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
    </div>
  );
}

export default App;
