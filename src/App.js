import React from 'react';

import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      ],
      inputValue: '',
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
    const newData = [...this.state.data]
    newData.push(newTodo);
    this.setState({data: newData});
  }

  handleChange = event => {
    this.setState({inputValue: event.target.value});
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

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList data={this.state.data} setClickId={this.setClickId} handleToggleCompleted={this.handleToggleCompleted} />
        <TodoForm inputValue={this.state.inputValue} handleSubmit={this.handleSubmit} handleChange={this.handleChange} handleClear={this.handleClear} />
      </div>
    );
  }
}

export default App;
