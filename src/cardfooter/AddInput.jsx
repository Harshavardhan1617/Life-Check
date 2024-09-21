import "./AddInput.css";

export default function AddInput({
  onChange,
  addTodo,
  appendTodos,
  setNewTodo,
  close,
}) {
  return (
    <div className="add-input">
      <div className="input-area">
        <textarea value={addTodo} onChange={onChange}></textarea>
      </div>
      <div className="btn-area">
        <div className="material-symbols-outlined close" onClick={close}>
          close
        </div>
        <div
          className="material-symbols-outlined add"
          onClick={() => {
            if (addTodo.length > 3) {
              appendTodos(addTodo);
              setNewTodo("");
            }
          }}
        >
          add
        </div>
      </div>
    </div>
  );
}
