class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}
 
export default App;
  
import React from "react";
  
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
 
const Todoitems = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Fold Clothes',
    id: 1528817077287,
    completed: false
  },
  {
    task: 'Mow Lawn',
    id: 1528817077288,
    completed: false
  },
  {
    task: 'Bathe Dog',
    id: 1528817077289,
    completed: false
  },
  {
    task: 'Dust',
    id: 1528817077290,
    completed: false
  },
  {
    task: 'Cook',
    id: 1528817077291,
    completed: false
  }
];
 
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Todoitems
    };
  }
  
  addTodo = (e, Todo) => {
    e.preventDefault();
 
    const newTodo = {
      name: Todo,
      id: Date.now(),
      completed: false
    };
 
    this.setState({
      Todoitems: [...this.state.Todoitems, newTodo]
    });
  };
 
  toggleTodoItem = TodoId => {
    console.log(TodoId);
 
    this.setState({
      Todoitems: this.state.Todoitems.map(Todo => {
        console.log(Todo);
        if (TodoId === Todo.id) {
          return {
            ...Todo,
            purchased: !Todo.completed
          };
        }
 
        return Todo;
      })
    });
  };
  
  clearCompleted = e => {
    e.preventDefault();
    console.log(this.state.Todoitems);
    this.setState({
      Todoitems: this.state.Todoitems.filter(Todo => Todo.completed === false)
    });
    console.log(this.state.Todoitems);
  };
  
  render() {
    return (
      <div className="App">
      <div className="header">
        <h1>To-do List</h1>
        <TodoForm addItem={this.addItem} />
      </div>
      <TodoList
        Todoitems={this.state.Todoitems}
        toggleTodoItem={this.toggleTodoItem}
        clearCompleted={this.clearCompleted}
      />
    </div>
    );
  }
}
 
export default App;