import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const data = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDoList: data,
      task: ""
    };
  }

  toogleDone = clickedTaskId => {
    this.setState({
      toDoList: this.state.toDoList.map(item => {
        if (item.id === clickedTaskId) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  clearPurchased = () => {
    this.setState({
      toDoList: this.state.toDoList.filter(item => {
        return item.completed !== true;
      })
    });
  };

  addTodo = newToDo => {
    const newTask = {
      task: newToDo,
      id: new Date(),
      completed: false
    };
    this.setState({
      toDoList: [...this.state.toDoList, newTask]
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          toDoList={this.state.toDoList}
          toogleDone={this.toogleDone}
          clearPurchased={this.clearPurchased}
        />
      </div>
    );
  }
}

export default App;
