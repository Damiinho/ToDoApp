import React from "react";
import "./AddTask.css";

const AddTask = (props) => {
  return (
    <form className="App__form" onSubmit={props.confirmed}>
      <label className="App__form-text">
        <input
          type="text"
          placeholder={"wpisz coś"}
          value={props.value}
          onChange={props.inputChange}
        />
      </label>
      <div className="App__form-priority">
        <label className="App__form-priority__date">
          Wybierz datę wykonania:{" "}
          <input
            type="date"
            value={props.taskEndDate}
            onChange={props.dateChange}
          />
        </label>
        <label className="App__form-priority__importance">
          Czy zadanie jest ważne?{" "}
          <input
            type="checkbox"
            checked={props.checked}
            onChange={props.priorityChange}
          />
        </label>
      </div>
      <button>dodaj zadanie</button>
    </form>
  );
};

export default AddTask;
