import "./InputTodo.css";
import { useState } from "react";

export default function InputTodo({ appendTodos }) {
  const [addTodo, setNewTodo] = useState("");
  const updateTodo = (evt) => {
    setNewTodo(evt.target.value);
  };
  return (
    <div className="add-input">
      <textarea value={addTodo} onChange={updateTodo}></textarea>
      <button
        onClick={() => {
          appendTodos(addTodo);
          setNewTodo("");
        }}
      >
        Add
      </button>
    </div>
  );
}
