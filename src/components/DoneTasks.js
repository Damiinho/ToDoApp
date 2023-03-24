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
      <h2>Zadania zrobione ({tasks.length}) </h2>
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
      {props.isActive ? null : tasks.reverse()}
    </>
  );
};

export default DoneTasks;
