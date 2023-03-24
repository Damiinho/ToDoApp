import React from "react";
import "./AddTask.css";

const AddTask = (props) => {
  return (
    <form onSubmit={props.confirmed}>
      <label>
        <input type="text" value={props.value} onChange={props.inputChange} />
      </label>
      <label>
        <input
          type="checkbox"
          checked={props.checked}
          onChange={props.priorityChange}
        />{" "}
        priorytet
      </label>
      <br />
      <label>
        Do kiedy zrobić?{" "}
        <input
          type="date"
          value={props.taskEndDate}
          onChange={props.dateChange}
        />
      </label>
      <br />
      <button>Dodaj zadanie</button>
    </form>
  );
};

export default AddTask;
