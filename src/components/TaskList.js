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

  return (
    <>
      <ul>{tasks}</ul>
    </>
  );
};

export default TaskList;
