import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    marginBottom: '5px',
  },
  done: {
    marginBottom: '5px',
    textDecoration: 'line-through',
  }
};

class Todo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={this.props.todo.completed ? classes.done : classes.root} onClick={this.props.handleClick}>
        {this.props.todo.task}
      </div>
    );
  }
}

export default withStyles(styles)(Todo);
