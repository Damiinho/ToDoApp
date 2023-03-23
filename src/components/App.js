import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    newTask: {
      text: "",
      priority: false,
      taskEndDate: "",
    },
  };

  handleInputChange = (e) => {
    const newState = this.state.newTask;
    newState.text = e.target.value;
    this.setState({ newTask: newState });
  };
  handlePriorityChange = () => {
    const newState = this.state.newTask;
    newState.priority = !newState.priority;
    this.setState({ newTask: newState });
  };

  handleDate = (e) => {
    const newState = this.state.newTask;
    newState.taskEndDate = e.target.value;
    this.setState({ newTask: newState });
  };
  handleConfirmed = (e) => {
    e.preventDefault();
    alert("Dodano nowe zadanie");
    this.setState({
      newTask: {
        text: "",
        priority: false,
        taskEndDate: "",
      },
    });
  };

  render() {
    return (
      <>
        <h1>TO DO APP</h1>
        <AddTask
          value={this.state.newTask.text}
          inputChange={this.handleInputChange}
          checked={this.state.newTask.priority}
          priorityChange={this.handlePriorityChange}
          taskEndDate={this.state.newTask.taskEndDate}
          dateChange={this.handleDate}
          confirmed={this.handleConfirmed}
        />
        <TaskList />
      </>
    );
  }
}

export default App;
