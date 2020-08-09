import React from "react";

class Todo extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.task);
    return (
      <div onClick={() => this.props.toogleDone(this.props.task.id)}>
        <p>{this.props.task.task}</p>
      </div>
    );
  }
}

export default Todo;
