import { useState } from "react";
import React, { useRef } from "react";

import Card from "../card/Card";
import "./CardList.css";
import InputTodo from "../InputTodo/InputTodo";

export default function CardList({ todo }) {
  var [isBeingAdded, setAdd] = useState(false);
  const [addTodo, setNewTodo] = useState("");

  const showEdit = () => {
    setAdd((isBeingAdded = !isBeingAdded));
  };

  const updateTodo = (evt) => {
    setNewTodo(evt.target.value);
  };
  return (
    <div className="whole-card">
      <div className="list">
        {todo.map((el) => {
          return <Card todo={el.text} key={el.id} />;
        })}

        {isBeingAdded && (
          <InputTodo addTodo={addTodo} updateTodo={updateTodo} />
        )}
      </div>
      <div className="add-btn" onClick={showEdit}>
        <span className="material-symbols-outlined">add</span>
        <p>Add a Todo</p>
      </div>
    </div>
  );
}
