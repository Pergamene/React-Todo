import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class TodoForm extends React.Component {
  render() {
    return (
      <Fragment>
        <TextField variant="outlined" label="...todo"/>
        <Button type="submit" color="primary" variant="contained">Add Todo</Button>
        <Button color="secondary" variant="contained">Clear Completed</Button>
      </Fragment>
    );
  }
}

export default TodoForm;
