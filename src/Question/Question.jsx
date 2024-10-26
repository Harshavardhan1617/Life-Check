import "./Question.css";

export default function Question() {
  return (
    <div className="question">
      <div id="text" className="item">
        <p>has this week been meaningful so far?</p>
      </div>
      <div id="options" className="item">
        <div id="yes" className="item material-symbols-outlined">
          check
        </div>
        <div id="no" className="item material-symbols-outlined">
          close
        </div>
      </div>
    </div>
  );
}
