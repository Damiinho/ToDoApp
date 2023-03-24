import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import DoneTasks from "./DoneTasks";

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
    doneTasks: [],
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

  handleDoneButton = (id) => {
    const taskList = [...this.state.taskList];
    const doneTask = taskList.splice(id, 1);
    const now = new Date();

    doneTask[0].taskDoneDate = `${now.getFullYear()}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${now
      .getDate()
      .toString()
      .padStart(2, "0")}, ${now.getHours()}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${now
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;
    console.log(doneTask);
    const doneTasks = [...this.state.doneTasks].concat(doneTask);
    this.setState({ taskList, doneTasks });
  };
  handleDeleteButton = (id) => {
    const taskList = [...this.state.taskList];
    taskList.splice(id, 1);
    this.setState({ taskList });
  };
  handleDeleteFromDoneButton = (id) => {
    const doneTasks = [...this.state.doneTasks];
    doneTasks.splice(id, 1);
    this.setState({ doneTasks });
  };

  render() {
    return (
      <>
        <div className="App">
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
          {this.state.taskList.length === 0 ? null : (
            <TaskList
              tasks={this.state.taskList}
              doneButton={this.handleDoneButton}
              deleteButton={this.handleDeleteButton}
            />
          )}
          {this.state.doneTasks.length === 0 ? null : (
            <DoneTasks
              tasks={this.state.doneTasks}
              deleteButton={this.handleDeleteFromDoneButton}
            />
          )}
        </div>
      </>
    );
  }
}

export default App;
