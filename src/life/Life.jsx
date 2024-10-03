import Week from "../week/Week";
import "./Life.css";

export default function Life({ data }) {
  return (
    <div className="life">
      {data.map((eachWeek) => {
        return (
          <Week
            key={eachWeek.weekID}
            todos={eachWeek.todo}
            timeStamp={eachWeek.weekID}
          />
        );
      })}
    </div>
  );
}
