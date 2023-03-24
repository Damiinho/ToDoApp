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
    if (a.props.text < b.props.text) {
      return -1;
    }
    if (a.props.text > b.props.text) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="App__task-list">
      <div className="App__task-list__header">
        <h3>Lista zadań do zrobienia ({tasks.length})</h3>
      </div>
      <ul>{tasks}</ul>
    </div>
  );
};

export default TaskList;
