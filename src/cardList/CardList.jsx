import { useState } from "react";
import React, { useRef } from "react";

import Card from "../card/Card";
import "./CardList.css";
import InputTodo from "../InputTodo/InputTodo";

export default function CardList({ todo, appendTodos, timeStamp }) {
  var [isBeingAdded, setAdd] = useState(false);
  const showEdit = () => {
    setAdd((isBeingAdded = !isBeingAdded));
  };

  return (
    <div className="whole-card">
      <div className="list">
        {todo.map((el) => {
          return <Card todo={el.text} key={el.id} />;
        })}
      </div>
      {isBeingAdded && <InputTodo appendTodos={appendTodos} />}
      <div className="add-btn" onClick={showEdit}>
        {!isBeingAdded && (
          <span className="material-symbols-outlined">add</span>
        )}
        {isBeingAdded ? <p>Done</p> : <p>Add a Todo</p>}
      </div>
    </div>
  );
}
