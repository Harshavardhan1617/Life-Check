import "./App.css";
import Life from "./life/Life";
import DateOfBirthPicker from "./DatePicker/DatePicker";
import { db, createArray } from "../db";
import { useEffect, useState } from "react";

function App() {
  const [dataExists, setDataToggle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkDataExistence = async () => {
      try {
        const count = await db.table("weeks").count();
        setDataToggle(count > 0);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkDataExistence();
  }, []);

  const handleDateSubmit = (selectedDate) => {
    setIsLoading(true);
    createArray(selectedDate.valueOf());
    setDataToggle(true);
    setIsLoading(false);
  };

  if (isLoading) {
    return <div>Loading...</div>; // Or a more sophisticated loading component
  }

  return (
    <>
      {dataExists ? <Life /> : <DateOfBirthPicker toggler={handleDateSubmit} />}
    </>
  );
}

export default App;
