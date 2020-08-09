import React from "react";

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  handleChange = e => {
    this.setState({
      task: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({
      task: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="toDo"
          placeholder="...todo"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add To-Do</button>
      </form>
    );
  }
}
export default ToDoForm;
