import "./Week.css";
import Popover from "@mui/material/Popover";
import { useState, useMemo, useCallback } from "react";
import { db } from "../../db";
import CardList from "../cardList/CardList";

export default function Week({ todos: initialTodos, timeStamp }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [todos, setTodos] = useState(initialTodos);

  const isOpen = Boolean(anchorEl);
  const popoverId = isOpen ? "week-popover" : undefined;

  const getWeekColor = useMemo(() => {
    const today = Date.now();
    const timeStampWeek = timeStamp + 604800000;
    const isPast = timeStampWeek < today;
    const emptyTodos = todos.length === 0;
    const coupleOfTodos = todos.length > 0 && todos.length < 3;
    const fewTodos = todos.length >= 3 && todos.length < 5;
    const bunchOfTodos = todos.length >= 5;

    if (isPast && coupleOfTodos) return "var(--color-filledPast)";
    if (isPast && fewTodos) return "var(--color-filledPast1)";
    if (isPast && bunchOfTodos) return "var(--color-filledPast2)";
    if (isPast && emptyTodos) return "var(--color-emptyPast)";
    if (!isPast && coupleOfTodos) return "var(--color-filledFuture)";
    if (!isPast && fewTodos) return "var(--color-filledFuture1)";
    if (!isPast && bunchOfTodos) return "var(--color-filledFuture2)";
    if (!isPast && emptyTodos) return "var(--color-emptyFuture)";
  }, [timeStamp, todos.length]);

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const appendTodos = useCallback(
    async (text) => {
      const newTodoID = crypto.randomUUID();
      const newTodo = { todoID: newTodoID, text, isChecked: false };

      try {
        setTodos((prevTodos) => [...prevTodos, newTodo]);
        await Promise.all([
          db.todos.add(newTodo),
          db.weeks
            .where("timeStamp")
            .equals(timeStamp)
            .modify((week) => {
              week.todo = [...week.todo, newTodoID];
            }),
        ]);
      } catch (error) {
        setTodos((prevTodos) =>
          prevTodos.filter((todo) => todo.todoID !== newTodoID)
        );
        console.error("Failed to add todo:", error);
      }
    },
    [timeStamp]
  );

  const deleteTodos = useCallback(
    async (id) => {
      try {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.todoID !== id));
        await Promise.all([
          db.todos.delete(id),
          db.weeks
            .where("timeStamp")
            .equals(timeStamp)
            .modify((week) => {
              week.todo = week.todo.filter((todoId) => todoId !== id);
            }),
        ]);
      } catch (error) {
        console.error("Failed to delete todo:", error);
      }
    },
    [timeStamp]
  );

  return (
    <div className="week-wrap">
      <div
        className="week-box"
        style={{ backgroundColor: getWeekColor }}
        onClick={handleClick}
        aria-label="Open week todos"
      />
      <Popover
        id={popoverId}
        open={isOpen}
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
          listOfTodos={todos}
          appendTodos={appendTodos}
          deleteTodos={deleteTodos}
          timeStamp={timeStamp}
          handleClose={handleClose}
        />
      </Popover>
    </div>
  );
}
