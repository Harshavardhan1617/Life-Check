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
  return (
    <div className="life">
      {sampleData.map((eachWeek) => {
        return (
          <Week
            key={eachWeek.id}
            todos={eachWeek.todos}
            timeStamp={eachWeek.id}
          />
        );
      })}
    </div>
  );
}
