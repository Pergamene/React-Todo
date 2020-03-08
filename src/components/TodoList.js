import React, { Fragment } from 'react';

import Todo from './Todo.js';

class TodoList extends React.Component {
  render() {
    return (
      <Fragment>
        {this.props.data.map(todo => {
          return <Todo todo={todo} handleClick={this.props.handleClick} key={todo.id} />;
        })}
      </Fragment>
    );
  }
}

export default TodoList;
