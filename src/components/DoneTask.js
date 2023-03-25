import React from "react";
import "./DoneTask.css";

const DoneTask = (props) => {
  return (
    <li className="App__done-tasks__task">
      <div className="left">{props.text}</div>{" "}
      <div className="right">
        Czas wykonania:
        <br />
        {props.taskDoneDate}
        <div className="App__done-tasks__task-buttons">
          <button
            className="App__done-tasks__delete-button"
            onClick={() => props.deleteButton(props.id)}
          >
            ×
          </button>
          <button
            className="App__done-tasks__back-button"
            onClick={() => props.backButton(props.id)}
          >
            cofnij ⮌
          </button>
        </div>
      </div>
    </li>
  );
};

export default DoneTask;
