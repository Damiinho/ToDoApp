import React from "react";
import DoneTask from "./DoneTask";
import "./DoneTasks.css";

const DoneTasks = (props) => {
  const tasks = props.tasks.map((task, index) => (
    <DoneTask
      key={index}
      id={index}
      text={task.text}
      taskDoneDate={task.taskDoneDate}
      deleteButton={props.deleteButton}
    />
  ));

  return (
    <div className="App__done-tasks">
      <div className="App__done-tasks__header">
        <h3>Zadania zrobione ({tasks.length})</h3>
        <p>ukryj</p>
        <label>
          <h4>
            Ukryj
            <input
              type="checkbox"
              checked={props.isActive}
              onChange={props.hide}
            />
          </h4>
        </label>
      </div>
      <ul>{props.isActive ? null : tasks.reverse()}</ul>
    </div>
  );
};

export default DoneTasks;
