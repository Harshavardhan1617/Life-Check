import React, { useState } from "react";
import Week from "../week/Week";
import { Pagination, Stack } from "@mui/material";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Life.css";

export default function Life({ data }) {
  const totalPages = 6;
  const ITEMS_PER_PAGE = Math.ceil(data.length / totalPages);
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageData = data.slice(startIndex, endIndex);

  return (
    <div className="life">
      <div className="weeks-container">
        {currentPageData.map((eachWeek) => (
          <Week
            key={eachWeek.weekID}
            todos={eachWeek.todo}
            timeStamp={eachWeek.weekID}
          />
        ))}
      </div>
      <Stack spacing={2} alignItems="center" mt={2}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChange}
          color="primary"
        />
      </Stack>
    </div>
  );
}
