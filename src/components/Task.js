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
        <div className="App__task-list__task-buttons">
          <button
            className="App__task-list__done-button"
            onClick={() => props.doneButton(props.id)}
          >
            zrobione ✔
          </button>
          <button
            className="App__task-list__delete-button"
            onClick={() => props.deleteButton(props.id)}
          >
            ×
          </button>
        </div>
      </div>
    </li>
  );
};

export default Task;
