import "./Square.css";

export default function Square({ emoji, clickHandler, index }) {
  return (
    <div className="Square">
      <button onClick={() => clickHandler(index)} className="Square">
        {emoji}
      </button>
    </div>
  );
}
