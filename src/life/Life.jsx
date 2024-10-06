import React, { useState, useEffect } from "react";
import Week from "../week/Week";
import { Pagination, Stack } from "@mui/material";
import "./Life.css";
import { db, fetchPopulatedWeeks } from "../../db";

export default function Life() {
  const totalPages = 6;
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [page, setPage] = useState(1);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeData = async () => {
      const totalDataCount = await db.weeks.count();
      const calculatedItemsPerPage = Math.ceil(totalDataCount / totalPages);
      setItemsPerPage(calculatedItemsPerPage);

      const initialData = await fetchPopulatedWeeks(0, calculatedItemsPerPage);
      setCurrentPageData(initialData);
      setIsLoading(false);
    };

    initializeData();
  }, []);

  useEffect(() => {
    const loadPageData = async () => {
      if (itemsPerPage === 0) return;

      setIsLoading(true);
      const startIndex = (page - 1) * itemsPerPage;
      const result = await fetchPopulatedWeeks(startIndex, itemsPerPage);
      setCurrentPageData(result);
      setIsLoading(false);
    };

    loadPageData();
  }, [page, itemsPerPage]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  if (isLoading) {
    return null; // Render nothing while loading
  }

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
