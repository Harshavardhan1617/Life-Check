import "./Week.css";
import Popover from "@mui/material/Popover";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardList from "../cardList/CardList";

export default function Week({ color = "#219EBC", todos }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        {/* <CardList todo={todos} /> */}
        <CardList todo={todos} />
      </Popover>
    </div>
  );
}
