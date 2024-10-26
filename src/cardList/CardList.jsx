import { useState } from "react";
import React, { useRef } from "react";

import Card from "../card/Card";
import "./CardList.css";
import CardFooter from "../cardfooter/CardFooter";
import Days from "../Days/Days";
import Hobbies from "../Hobbies/Hobbies";
import Achievement from "../Achievements/Achievement";
import Question from "../Question/Question";

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
  deleteTodos,
  timeStamp,
  handleClose,
}) {
  const timeStampData = calendarData(timeStamp);

  const closeCardList = () => {
    handleClose();
  };

  return (
    // <div className="whole-card">
    //   <div className="card-header">
    //     <p>{`${timeStampData.weekNumber} week of ${timeStampData.month}, ${timeStampData.year}`}</p>
    //     <div
    //       className="material-symbols-outlined close-icon"
    //       onClick={closeCardList}
    //     >
    //       close
    //     </div>
    //   </div>

    //   <div className="list">
    //     {listOfTodos.map((todo) => {
    //       return (
    //         <Card todos={todo} key={todo.todoID} deleteTodos={deleteTodos} />
    //       );
    //     })}
    //   </div>
    //   <CardFooter appendTodos={appendTodos} />
    // </div>
    <div className="card-board">
      <Days />
      <Hobbies />
      <Achievement />
      <Question />
    </div>
  );
}
