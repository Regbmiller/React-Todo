import React from "react";
 
class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      Todo1: ""
    };
  }
 
  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
 
  submitItem = e => {
    e.preventDefault();
    this.props.addItem(e, this.state.Todo);
  };
 
  render() {
    console.log("rendering form", this.state.Todo);
    return (
      <form onSubmit={this.submitItem}>
        <input type="text" name="item" onChange={this.handleChanges} />
        <button>Add</button>
      </form>
    );
  }
}
 
export default TodoForm
