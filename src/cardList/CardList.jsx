import Card from "../card/Card";
import "./CardList.css";

export default function CardList({ header }) {
  return (
    <div className="whole-card">
      <h3> {header} </h3>
      <div className="list">
        <Card
          todo={"this is a test todo to check the state of the item totodododo"}
        />
        <Card
          todo={"this is a test todo to check the state of the item totodododo"}
        />
        <Card
          todo={"this is a test todo to check the state of the item totodododo"}
        />
        <Card
          todo={"this is a test todo to check the state of the item totodododo"}
        />
        <Card
          todo={"this is a test todo to check the state of the item totodododo"}
        />
        <Card
          todo={"this is a test todo to check the state of the item totodododo"}
        />
        <Card
          todo={"this is a test todo to check the state of the item totodododo"}
        />
        <Card
          todo={"this is a test todo to check the state of the item totodododo"}
        />
        <Card
          todo={"this is a test todo to check the state of the item totodododo"}
        />
      </div>
      <div className="add-btn">
        <span className="material-symbols-outlined">add</span>
        <p>Add a Todo</p>
      </div>
    </div>
  );
}
