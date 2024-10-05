import "./Week.css";
import Popover from "@mui/material/Popover";
import { useState } from "react";
import { db } from "../../db";
import CardList from "../cardList/CardList";

export default function Week({ todos, timeStamp }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [listTodos, setTodos] = useState(todos);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const appendTodos = async (text) => {
    const newTodoID = crypto.randomUUID();
    const newTodo = { todoID: newTodoID, text: text, isChecked: false };

    // Update local state
    setTodos((prevTodos) => [...prevTodos, newTodo]);

    // Update database
    await db.todos.add(newTodo);
    const week = await db.weeks.get(timeStamp);
    await db.weeks.put({ ...week, todo: [...week.todo, newTodoID] });
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const today = new Date().valueOf();
  const timeStampWeek = timeStamp + 604800000;

  let color;
  if (timeStampWeek < today && listTodos.length > 0) {
    // color = "#ff6000";
    color = "#38b000";
  } else if (timeStampWeek < today && listTodos.length === 0) {
    color = "#219ebc";
  } else if (timeStampWeek > today && listTodos.length > 0) {
    color = "#FFB703";
  } else {
    color = "#c2fcff";
  }

  return (
    <div className="week-wrap">
      <div
        className="week-box"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      ></div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <CardList
          listOfTodos={listTodos}
          appendTodos={appendTodos}
          timeStamp={timeStamp}
          handleClose={handleClose}
        />
      </Popover>
    </div>
  );
}
