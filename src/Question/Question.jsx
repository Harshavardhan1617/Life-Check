import "./Question.css";

export default function Question() {
  return (
    <div className="question">
      <div id="text" className="item">
        <p>has this week been meaningful so far?</p>
      </div>
      <div id="options" className="item">
        <div id="yes" className="item"></div>
        <div id="no" className="item"></div>
      </div>
    </div>
  );
}
