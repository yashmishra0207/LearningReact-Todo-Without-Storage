import React, { Component } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "Learn from Complete React & Redux Course",
      },
      {
        id: 2,
        content: "Do React with Firebase Tutorial",
      },
    ],
  };

  deleteTodo = (idToBeDeleted) => {
    const newTodoList = this.state.todos.filter(({ id, content }) => {
      return id !== idToBeDeleted;
    });
    this.setState({ todos: newTodoList });
  };

  addTodo = (newTodo) => {
    const newTodoList = [newTodo, ...this.state.todos];
    this.setState({todos: newTodoList});
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="h1 blue-text">Transform todos to Achievements</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}
export default App;
