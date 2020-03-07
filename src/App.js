import React from 'react';

import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';

class App extends React.Component {
  // STORE DATA HERE [{task: 'name', id: Date.now(), completed: false}];
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
    }
  }
  // HANDLER FUNCTIONS


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList data={this.state.data} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
