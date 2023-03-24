import React from "react";

const DoneTask = (props) => {
  return (
    <li>
      Zadanie: {props.text}. Termin: {props.taskDoneDate}{" "}
      <button onClick={() => props.deleteButton(props.id)}>usuń</button>
    </li>
  );
};

export default DoneTask;
