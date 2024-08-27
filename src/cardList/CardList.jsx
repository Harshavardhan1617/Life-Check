import { useState } from "react";
import React, { useRef } from "react";

import Card from "../card/Card";
import "./CardList.css";

export default function CardList({ todo }) {
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

        {isBeingAdded && (
          <div className="add-input">
            <input type="text" />
          </div>
        )}
      </div>
      <div className="add-btn" onClick={showEdit}>
        <span className="material-symbols-outlined">add</span>
        <p>Add a Todo</p>
      </div>
    </div>
  );
}
