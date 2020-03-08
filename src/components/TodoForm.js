import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class TodoForm extends React.Component {

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <TextField variant="outlined" label="...todo" value={this.props.inputValue} onChange={this.props.handleChange} />
        <Button type="submit" color="primary" variant="contained">Add Todo</Button>
        <Button color="secondary" variant="contained">Clear Completed</Button>
      </form>
    );
  }
}

export default TodoForm;
