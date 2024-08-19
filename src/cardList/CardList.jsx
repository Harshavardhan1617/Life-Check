import Card from "../card/Card";
import "./CardList.css";

export default function CardList() {
  return (
    <div className="list">
      <Card
        todo={"this is a test todo to check the state of the item totodododo"}
      />
      <Card
        todo={"this is a test todo to check the state of the item totodododo"}
      />
    </div>
  );
}
