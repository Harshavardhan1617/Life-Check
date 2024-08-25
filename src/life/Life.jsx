import Week from "../week/Week";
import "./Life.css";
import sampleData from "../../seeds/index";

export default function Life() {
  const colors = ["#48cae4", "#023e8a", "#FFB703", "#FB8500"];
  console.log(sampleData);

  return (
    <div className="life">
      {sampleData.map((el) => {
        let color;
        if (el.isFilled === true && el.haveTodos === true) {
          color = "#ff6000";
        } else if (el.isFilled === true && el.haveTodos === false) {
          color = "#219ebc";
        } else if (el.isFilled === false && el.haveTodos === true) {
          color = "#FFB703";
        } else {
          color = "#c2fcff";
        }

        return <Week key={el.id} color={color} />;
      })}
    </div>
  );
}
