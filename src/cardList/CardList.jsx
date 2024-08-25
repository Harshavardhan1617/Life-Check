import { useState } from "react";
import React, { useRef } from "react";

import Card from "../card/Card";
import "./CardList.css";

export default function CardList({ header }) {
  var [isBeingAdded, setAdd] = useState(false);

  const showEdit = () => {
    setAdd((isBeingAdded = !isBeingAdded));
  };
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
        {isBeingAdded && (
          <div className="add-input">
            <input type="text" />
          </div>
        )}
      </div>
      <div className="add-btn" onClick={showEdit}>
        <span className="material-symbols-outlined">add</span>
        <p>Add a Todo</p>
      </div>
    </div>
  );
}
