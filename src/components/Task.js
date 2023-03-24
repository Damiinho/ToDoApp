import React from "react";
import "./Task.css";

const Task = (props) => {
  return (
    <li className={props.priority ? "priority" : null}>
      {props.text}. Termin: {props.taskEndDate}{" "}
      <button onClick={() => props.doneButton(props.id)}>Zrobione</button>
      <button onClick={() => props.deleteButton(props.id)}>usuń</button>
    </li>
  );
};

export default Task;
