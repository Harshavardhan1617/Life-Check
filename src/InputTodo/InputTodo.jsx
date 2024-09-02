import "./InputTodo.css";

export default function InputTodo({ addTodo, updateTodo }) {
  return (
    <div className="add-input">
      <textarea value={addTodo} onChange={updateTodo}></textarea>
    </div>
  );
}
