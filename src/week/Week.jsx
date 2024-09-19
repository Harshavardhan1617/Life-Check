import "./Week.css";
import Popover from "@mui/material/Popover";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardList from "../cardList/CardList";

export default function Week({ color = "#219EBC", todos, timeStamp }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [listTodos, setTodos] = useState(todos);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const appendTodos = (text) => {
    const newTodo = { id: crypto.randomUUID(), text: text, isChecked: false };
    setTodos([...listTodos, newTodo]);
    console.log([...listTodos, newTodo]);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
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
