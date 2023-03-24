import React from "react";

const DoneTask = (props) => {
  return (
    <li>
      <div className="left">{props.text}</div>{" "}
      <div className="right">
        Czas wykonania:
        <br />
        {props.taskDoneDate}
        <br />
        <button onClick={() => props.deleteButton(props.id)}>
          usuń zadanie
        </button>
      </div>
    </li>
  );
};

export default DoneTask;
