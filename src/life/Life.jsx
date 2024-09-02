import Week from "../week/Week";
import "./Life.css";
// import sampleData from "../../seeds/index";
import { useState } from "react";

export default function Life() {
  const dateOfBirth = 976371090000;

  const createArray = (dob) => {
    const date = new Date(dob);
    var timeStamp = date.valueOf();
    const AverageLifeSpanYears = 75;
    const millisecondsInWeek = 604800000;
    const weeksIn75Year = 3913;
    const monthsIn75Years = weeksIn75Year / 4;
    const db = [
      {
        id: timeStamp,
        todos: [
          { id: crypto.randomUUID(), text: "walk the dog", isChecked: true },
          { id: crypto.randomUUID(), text: "walk the dog", isChecked: true },
          {
            id: crypto.randomUUID(),
            text: "clean the house",
            isChecked: false,
          },
        ],
      },
    ];
    for (var i = 0; i <= weeksIn75Year; i++) {
      timeStamp += millisecondsInWeek;
      const element = {
        id: timeStamp,
        todos: [],
      };
      db.push(element);
    }
    return db;
  };

  const sampleData = createArray(dateOfBirth);
  const today = new Date().valueOf();
  return (
    <div className="life">
      {sampleData.map((el) => {
        let color;
        if (el.id < today && el.todos.length > 0) {
          color = "#ff6000";
        } else if (el.id < today && el.todos.length === 0) {
          color = "#219ebc";
        } else if (el.id > today && el.todos.length > 0) {
          color = "#FFB703";
        } else {
          color = "#c2fcff";
        }

        return (
          <Week key={el.id} color={color} todos={el.todos} timeStamp={el.id} />
        );
      })}
    </div>
  );
}
