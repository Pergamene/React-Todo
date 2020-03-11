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
      searchInput: '',
    }
  }

  handleSubmit = (event, value) => {
    event.preventDefault();
    const newTodo = {
      task: value,
      id: Date.now(),
      completed: false
    }
    this.setState({data: [...this.state.data, newTodo]});
  }

  handleSearchSubmit = (event, input) => {
    event.preventDefault();
    this.setState({searchInput: input});
  }

  handleToggleCompleted = todoIndex => {
    const newData = [...this.state.data];
    newData[todoIndex] = {
      ...newData[todoIndex],
      completed: !newData[todoIndex].completed
    };
    this.setState({data: newData});
  }

  handleClear = event => {
    event.preventDefault();
    const newData = this.state.data.filter(element => element.completed === false);
    this.setState({data: newData});
  }

  handleSearchClear = event => {
    event.preventDefault();
    this.setState({searchInput: ''});
  }
  
  filterData = () => {
    return this.state.data.filter(data => data.task.toLowerCase().includes(this.state.searchInput.toLowerCase()));
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Search searchInput={this.state.searchInput} handleSearchSubmit={this.handleSearchSubmit} handleSearchClear={this.handleSearchClear} />
        <TodoList setClickId={this.setClickId} handleToggleCompleted={this.handleToggleCompleted} filterData={this.filterData} />
        <TodoForm handleSubmit={this.handleSubmit} handleClear={this.handleClear} />
      </div>
    );
  }
}

export default App;
