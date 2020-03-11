import React from 'react';

import Search from './components/Search.js';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';

const seedData = [
  {
    task: 'Display Todo List',
    id: 1528817077286,
    completed: false,
  },
  {
    task: 'Add to Todo List',
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: seedData,
      displayData: seedData,
      inputValue: '',
      searchInput: '',
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const newTodo = {
      task: this.state.inputValue,
      id: Date.now(),
      completed: false
    }
    this.setState({inputValue: ''});
    this.changeData(newTodo, false);
  }

  handleSearchSubmit = event => {
    event.preventDefault();
    const filteredData = this.state.data.filter(data => data.task.toLowerCase().includes(this.state.searchInput.toLowerCase()));
    this.setState({displayData: [...filteredData]});
    this.setState({searchInput: ''});
  }

  handleChange = event => {
    this.setState({inputValue: event.target.value});
  }

  handleSearchChange = event => {
    this.setState({searchInput: event.target.value});
  }

  handleToggleCompleted = todoIndex => {
    const newData = [...this.state.data];
    newData[todoIndex] = {
      ...newData[todoIndex],
      completed: !newData[todoIndex].completed
    };
    this.changeData(newData, true);
  }

  handleClear = event => {
    event.preventDefault();
    const newData = this.state.data.filter(element => element.completed === false);
    this.changeData(newData, true);
  }

  handleSearchClear = event => {
    event.preventDefault();
    this.setState({displayData: [...this.state.data]});
  }

  changeData = (newData, replace) => {
    if (replace) {
      this.setState({data: newData});
      this.setState({displayData: newData});
    } else {
      this.setState({data: [...this.state.data, newData]});
      this.setState({displayData: [...this.state.displayData, newData]});
    }
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Search data={this.state.data} searchInput={this.state.searchInput} handleSearchSubmit={this.handleSearchSubmit} handleSearchChange={this.handleSearchChange} handleSearchClear={this.handleSearchClear} />
        <TodoList data={this.state.displayData} setClickId={this.setClickId} handleToggleCompleted={this.handleToggleCompleted} />
        <TodoForm inputValue={this.state.inputValue} handleSubmit={this.handleSubmit} handleChange={this.handleChange} handleClear={this.handleClear} />
      </div>
    );
  }
}

export default App;
