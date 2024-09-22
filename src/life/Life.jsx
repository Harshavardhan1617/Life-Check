import Week from "../week/Week";
import "./Life.css";
import { createArray } from "../../seeds/sampleDataGenerator";

const dateOfBirth = 976371090000;
var sampleData = [];

if (localStorage.length === 0) {
  sampleData = createArray(dateOfBirth);
  const sampleData_serialized = JSON.stringify(sampleData);
  localStorage.setItem("sampleData", sampleData_serialized);
  console.log("saved to local storage");
} else {
  const sampleData_deserialized = JSON.parse(
    localStorage.getItem("sampleData")
  );
  sampleData = sampleData_deserialized;
  console.log("retrieved from local storage");
}

export default function Life() {
  const today = new Date().valueOf();

  return (
    <div className="life">
      {sampleData.map((eachWeek) => {
        let color;
        if (eachWeek.id < today && eachWeek.todos.length > 0) {
          // color = "#ff6000";
          color = "#38b000";
        } else if (eachWeek.id < today && eachWeek.todos.length === 0) {
          color = "#219ebc";
        } else if (eachWeek.id > today && eachWeek.todos.length > 0) {
          color = "#FFB703";
        } else {
          color = "#c2fcff";
        }

        return (
          <Week
            key={eachWeek.id}
            color={color}
            todos={eachWeek.todos}
            timeStamp={eachWeek.id}
          />
        );
      })}
    </div>
  );
}
