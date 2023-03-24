import React from "react";
import "./Task.css";

const Task = (props) => {
  return (
    <li className={`App__task-list__task ${props.priority ? "priority" : ""}`}>
      <div className="left">{props.text}</div>
      <div className="right">
        Termin: {props.taskEndDate}{" "}
        <button onClick={() => props.doneButton(props.id)}>Zrobione</button>
        <button onClick={() => props.deleteButton(props.id)}>usuń</button>
      </div>
    </li>
  );
};

export default Task;
