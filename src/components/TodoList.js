// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
 
import React from "react";
import Todo from "./Todo";
 
const TodoList = props => {
  return (
    <div className="Todo-list">
      {props.Todoitems.map(todo => (
        <Todo key={Todo.id} Todo={Todo} toggleTodo={props.toggleTodo} />
      ))};
      <button className="clear-btn" onClick={props.clear}>
        Clear 
      </button>
    </div>
  );
};
 
export default TodoList
