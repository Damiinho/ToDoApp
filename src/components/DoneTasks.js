import React from "react";
import DoneTask from "./DoneTask";
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
    <>
      <h2>Zadania zrobione</h2>
      {tasks.reverse()}
    </>
  );
};

export default DoneTasks;
