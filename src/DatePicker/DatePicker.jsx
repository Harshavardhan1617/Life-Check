import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./DatePicker.css";
import { useState } from "react";
import { createArray } from "../../db";
export default function DateOfBirthPicker({ toggler }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = () => {
    toggler(selectedDate);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="date-picker">
      <Stack spacing={5} direction="row">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              label="date of birth"
              format="DD/MM/YYYY"
              value={selectedDate}
              onChange={handleDateChange}
              sx={{ width: 500 }}
            />
          </DemoContainer>
        </LocalizationProvider>
        <Button
          variant="outlined"
          size="medium"
          sx={{
            height: 36,
            my: "auto",
            transform: "translateY(3px)",
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Stack>
    </div>
  );
}
