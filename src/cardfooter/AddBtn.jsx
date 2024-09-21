import "./AddBtn.css";

export default function AddBtn({ onClick, toggleTodo }) {
  return (
    <div className="add-btn" onClick={onClick}>
      {!toggleTodo && <span className="material-symbols-outlined">add</span>}
      {toggleTodo ? <p>Done</p> : <p>Add a Todo</p>}
    </div>
  );
}
