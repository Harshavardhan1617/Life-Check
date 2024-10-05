import { useState } from "react";
import React, { useRef } from "react";

import Card from "../card/Card";
import "./CardList.css";
import CardFooter from "../cardfooter/CardFooter";

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

export default function CardList({
  listOfTodos,
  appendTodos,
  timeStamp,
  handleClose,
}) {
  const timeStampData = calendarData(timeStamp);

  const closeCardList = () => {
    handleClose();
  };

  return (
    <div className="whole-card">
      <div className="card-header">
        <p>{`${timeStampData.weekNumber} week of ${timeStampData.month}, ${timeStampData.year}`}</p>
        <div
          className="material-symbols-outlined close-icon"
          onClick={closeCardList}
        >
          close
        </div>
      </div>

      <div className="list">
        {listOfTodos.map((el) => {
          return <Card todo={el.text} key={el.todoID} />;
        })}
      </div>
      <CardFooter appendTodos={appendTodos} />
    </div>
  );
}
