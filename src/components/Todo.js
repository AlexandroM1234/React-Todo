import React from "react";

const Todo = props => {
  return (
    <div onClick={() => props.toogleDone(props.task.id)}>
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;
