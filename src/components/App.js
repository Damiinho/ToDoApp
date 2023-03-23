import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>TO DO APP</h1>
        <AddTask />
        <TaskList />
      </>
    );
  }
}

export default App;
