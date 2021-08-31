import "./Square.css";

export default function Square({ emoji }) {
  return (
    <div className="Square">
      <button>{emoji}</button>
    </div>
  );
}
