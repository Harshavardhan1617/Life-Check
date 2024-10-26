import "./Hobbies.css";
import Hobby from "./Hobby";

export default function Hobbies() {
  return (
    <div className="hobbies">
      <Hobby />
      <Hobby color="#a3c4f3" />
      <Hobby color="#98f5e1" />
    </div>
  );
}
