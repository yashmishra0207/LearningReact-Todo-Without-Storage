import React, { Component } from "react";

class AddTodo extends Component {
  
  state = {
    content: "",
    id: ""
  }

  handleOnChange = (e) => {
      const updatedContent = e.target.value;
      this.setState({ content: updatedContent });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const id = Math.random();
    this.props.addTodo(this.state);
    this.setState({content: "", id});
    e.target.reset()
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Add new todo:</label>
          <input type="text" onChange={this.handleOnChange} placeholder="What you wanna do ?" />
        </form>
      </div>
    );
  }

}
export default AddTodo;
