// Takes data and displays the task to the screen

// Toggle completed - strike through
import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <div>{this.props.todo.task}</div>
    );
  }
}

export default Todo;
