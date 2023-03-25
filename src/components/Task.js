import React from "react";
import "./Task.css";

const Task = (props) => {
  const now = new Date();
  const end = new Date(props.taskEndDate);

  return (
    <li className="App__task-list__task">
      <div className={`left ${props.priority ? "priority" : ""}`}>
        {props.text}
      </div>
      <div className="right">
        <p className={now > end ? "toLate priority" : null}>
          Termin: {props.taskEndDate}{" "}
        </p>
        <button onClick={() => props.doneButton(props.id)}>Zrobione</button>
        <button onClick={() => props.deleteButton(props.id)}>usuń</button>
      </div>
    </li>
  );
};

export default Task;
