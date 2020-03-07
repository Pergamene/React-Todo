// Receives todos array, iterates creating <Todo />
import React, { Fragment } from 'react';

import Todo from './Todo.js';

class TodoList extends React.Component {
  render() {
    return (
      <Fragment>
        {this.props.data.map((todo, index) => {
          return <Todo todo={todo} key={index} />;
        })}
      </Fragment>
    );
  }
}

export default TodoList;
