import React from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = (props) => {
  const tasks = props.tasks.map((task, index) => (
    <Task
      key={index}
      id={index}
      text={task.text}
      taskEndDate={task.taskEndDate}
      priority={task.priority}
      doneButton={props.doneButton}
      deleteButton={props.deleteButton}
    />
  ));
  tasks.sort((a, b) => {
    a = a.props.text.toLowerCase();
    b = b.props.text.toLowerCase();

    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="App__task-list">
      <div className="App__task-list__header" onClick={props.hide}>
        <h3>
          {props.isHide
            ? `Lista zadań do zrobienia (${tasks.length}) ⮛ ⮛ ⮛`
            : `Lista zadań do zrobienia (${tasks.length}) ⮙ ⮙ ⮙`}
        </h3>
      </div>
      {props.isHide ? null : <ul>{tasks}</ul>}
    </div>
  );
};

export default TaskList;
