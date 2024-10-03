import "./App.css";
import Life from "./life/Life";
import DateOfBirthPicker from "./DatePicker/DatePicker";
import { db, createArray } from "../db";
import { useEffect, useState } from "react";

function App() {
  const [dataExists, setDataToggle] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkDataExistence = async () => {
      try {
        const count = await db.table("weeks").count();
        setDataToggle(count > 0);
        if (count > 0) {
          const result = await db.weeks.toArray();
          setData(result);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkDataExistence();
  }, []);

  const handleDateSubmit = async (selectedDate) => {
    setIsLoading(true);
    await createArray(selectedDate.valueOf());
    const result = await db.weeks.toArray();
    setData(result);
    setDataToggle(true);
    setIsLoading(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {dataExists ? (
        <Life data={data} />
      ) : (
        <DateOfBirthPicker toggler={handleDateSubmit} />
      )}
    </>
  );
}

export default App;
