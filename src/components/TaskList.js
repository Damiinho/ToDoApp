import React from "react";
import Task from "./Task";

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
    <>
      <ul>{tasks}</ul>
    </>
  );
};

export default TaskList;
