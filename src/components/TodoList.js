import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Todo from './Todo.js';

const styles = {
  root: {
    marginBottom: '10px',
  },
};

class TodoList extends React.Component {
  handleClick(index) {
    this.props.handleToggleCompleted(index);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {this.props.data.map((todo, index) => {
          return <Todo todo={todo} handleClick={() => this.handleClick(index)} key={todo.id} />;
        })}
      </div>
    );
  }
}

export default withStyles(styles)(TodoList);
