import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
  },
  item: {
    marginBottom: '10px',
  },
};

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleChange = event => {
    this.setState({inputValue: event.target.value});
  }

  submit = event => {
    this.props.handleSubmit(event, this.state.inputValue);
    this.setState({inputValue: ''});
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root} onSubmit={this.submit}>
        <TextField className={classes.item} variant="outlined" label="...todo" value={this.state.inputValue} onChange={this.handleChange} />
        <Button className={classes.item} type="submit" color="primary" variant="contained">Add Todo</Button>
        <Button className={classes.item} color="secondary" variant="contained" onClick={this.props.handleClear}>Clear Completed</Button>
      </form>
    );
  }
}

export default withStyles(styles)(TodoForm);
