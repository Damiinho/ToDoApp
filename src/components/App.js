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
    taskList: [
      {
        text: "elo",
        priority: false,
        taskEndDate: "2023-01-10",
      },
      {
        text: "elo3",
        priority: true,
        taskEndDate: "2023-03-02",
      },
      {
        text: "elo2",
        priority: true,
        taskEndDate: "2023-03-02",
      },
      {
        text: "elo1",
        priority: true,
        taskEndDate: "2023-03-02",
      },
    ],
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

    const { text, priority, taskEndDate } = this.state.newTask;
    if (text !== "" && taskEndDate !== "") {
      const newTask = {
        text,
        priority,
        taskEndDate,
      };

      const taskList = [...this.state.taskList].concat(newTask);
      this.setState({
        newTask: {
          text: "",
          priority: false,
          taskEndDate: "",
        },
        taskList,
      });
    } else alert("Tekst zadania oraz data wykonania są wymagane");
  };

  doneButton = (id) => {
    console.log(id);
  };
  deleteButton = (id) => {
    const taskList = [...this.state.taskList];
    taskList.splice(id, 1);
    this.setState({ taskList });
  };

  render() {
    return (
      <>
        <AddTask
          value={this.state.newTask.text}
          inputChange={this.handleInputChange}
          checked={this.state.newTask.priority}
          priorityChange={this.handlePriorityChange}
          taskEndDate={this.state.newTask.taskEndDate}
          dateChange={this.handleDate}
          confirmed={this.handleConfirmed}
        />
        {this.state.taskList.length === 0 ? null : (
          <TaskList
            tasks={this.state.taskList}
            doneButton={this.doneButton}
            deleteButton={this.deleteButton}
          />
        )}
      </>
    );
  }
}

export default App;
