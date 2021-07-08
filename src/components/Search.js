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

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleSearchChange = event => {
    this.setState({input: event.target.value});
  }

  submit = event => {
    this.props.handleSearchSubmit(event, this.state.input);
    this.setState({input: ''});
  }

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root} onSubmit={this.submit}>
        <TextField className={classes.item} variant="outlined" label="Search" value={this.state.input} onChange={this.handleSearchChange} helperText={(this.props.searchInput === '') ? '' : `Searching for: ${this.props.searchInput}`} />
        <Button className={classes.item} color="secondary" variant="contained" onClick={this.props.handleSearchClear}>Clear Search</Button>
      </form>
    );
  }
}

export default withStyles(styles)(Search);
