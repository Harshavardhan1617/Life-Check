import "./CardFooter.css";
import AddBtn from "./AddBtn";
import AddInput from "./AddInput";
import { useState } from "react";

export default function CardFooter({ appendTodos }) {
  const [addTodo, setNewTodo] = useState("");
  const [toggleTodo, setToggleTodo] = useState(false);

  const setTodo = (evt) => {
    setNewTodo(evt.target.value);
  };

  const toggleNewTodo = () => {
    setToggleTodo(!toggleTodo);
  };

  return (
    <div className="footer-area">
      {toggleTodo ? (
        <AddInput
          onChange={setTodo}
          addTodo={addTodo}
          appendTodos={appendTodos}
          setNewTodo={setNewTodo}
          close={toggleNewTodo}
        />
      ) : (
        <AddBtn onClick={toggleNewTodo} toggleTodo={toggleTodo} />
      )}
    </div>
  );
}
