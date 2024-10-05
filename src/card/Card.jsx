import "./Card.css";

export default function Card({ todos, deleteTodos }) {
  return (
    <div className="card">
      <div className="card-text">{todos.text}</div>
      <div
        className="material-symbols-outlined delete-icon"
        onClick={() => deleteTodos(todos.todoID)}
      >
        delete
      </div>
    </div>
  );
}
