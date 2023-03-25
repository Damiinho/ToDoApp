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
      <div className="App__done-tasks__header" onClick={props.hide}>
        <h3>Zadania zrobione ({tasks.length})</h3>
        <h4>{props.isHide ? "pokaż" : "ukryj"}</h4>
      </div>
      <ul>{props.isHide ? null : tasks.reverse()}</ul>
    </div>
  );
};

export default DoneTasks;
