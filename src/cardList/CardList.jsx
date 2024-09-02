import { useState } from "react";
import React, { useRef } from "react";

import Card from "../card/Card";
import "./CardList.css";
import InputTodo from "../InputTodo/InputTodo";

const calendarData = (stamp) => {
  const result = {
    weekNumber: "",
    month: "",
    year: "",
  };
  const date = new Date(stamp);

  const weekNumber = Math.ceil(date.getDate() / 7);
  const weekLabels = ["first", "second", "third", "fourth", "fifth"];
  result.weekNumber = weekLabels[weekNumber - 1] || "other";

  result.month = date.toLocaleString("en-US", { month: "long" });
  result.year = date.getFullYear();

  return result;
};

export default function CardList({ todo, appendTodos, timeStamp }) {
  var [isBeingAdded, setAdd] = useState(false);
  const showEdit = () => {
    setAdd((isBeingAdded = !isBeingAdded));
  };
  const timeStampData = calendarData(timeStamp);
  return (
    <div className="whole-card">
      <p>{`${timeStampData.weekNumber} week of ${timeStampData.month}, ${timeStampData.year}`}</p>

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
