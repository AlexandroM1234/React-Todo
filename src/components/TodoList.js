// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      {props.toDoList.map(task => (
        <Todo key={task.id} task={task} toogleDone={props.toogleDone} />
      ))}
      <button>Clear Completed</button>
    </div>
  );
};

export default TodoList;
