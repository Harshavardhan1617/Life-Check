import "./Card.css";

export default function Card({ todo }) {
  return (
    <div className="card">
      <div className="card-text">{todo}</div>
      <div className="material-symbols-outlined edit-icon">edit</div>
    </div>
  );
}
