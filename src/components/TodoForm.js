import React from "react";

class ToDoForm extends React.Component {
  constructor() {
    super();
  }

  handleChange = e => {};

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="toDo" placeholder="...todo"></input>
        <button>Add To-Do</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}
export default ToDoForm;
