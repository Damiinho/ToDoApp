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
        text: "Skończyć pisać „to do app”",
        priority: true,
        taskEndDate: "2023-03-23",
      },
      {
        text: "Nauczyć się pisać bez litrówek",
        priority: false,
        taskEndDate: "2023-03-02",
      },
      {
        text: "Zmienić to schemat sortowania w tej aplikacji",
        priority: false,
        taskEndDate: "2023-03-02",
      },
      {
        text:
          "Napisać rozprawkę na temat wyższości warzyw nad owocami lub odwrotnie. Poprzeć dziesięcioma argumentami i udostępnić w internecie, po 10 dniach usunąć i udawać, że to się nigdy nie zdarzyło",
        priority: false,
        taskEndDate: "2023-03-02",
      },
    ],
    doneTasks: [],
    doneTasksHide: false,
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

  handleHide = (e) => {
    this.setState({ doneTasksHide: e.target.checked });
  };

  render() {
    return (
      <>
        <div className="App">
          <div className="App__title">
            <h1>„to do” (zrobienia)</h1>
          </div>
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
              isActive={this.state.doneTasksHide}
              hide={this.handleHide}
            />
          )}
        </div>
      </>
    );
  }
}

export default App;
