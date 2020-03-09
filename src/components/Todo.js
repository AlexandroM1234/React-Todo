import React from "react";

const Todo = props => {
  console.log(props.task);
  return (
    <div onClick={() => props.toogleDone(props.task.task.id)}>
      <p>{props.task.task}</p>
    </div>
  );
};

export default Todo;
