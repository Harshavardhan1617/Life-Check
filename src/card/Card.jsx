import "./Card.css";

export default function Card({ todo }) {
  return (
    <div className="card">
      <div className="card-text">{todo}</div>
      <div className="edit-icon">
        <span className="material-symbols-outlined">edit</span>
      </div>
    </div>
  );
}
