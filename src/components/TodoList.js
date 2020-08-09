// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

class TodoList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.toDoList.map(task => (
          <Todo key={task.id} task={task} toogleDone={this.props.toogleDone} />
        ))}
        <button onClick={this.props.clearPurchased}>Clear Completed</button>
      </div>
    );
  }
}

export default TodoList;
