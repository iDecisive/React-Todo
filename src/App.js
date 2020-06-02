import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor () {

    super();

    this.state = {

      todoList: [

        {
          msg: 'hi',
          completed: false
        },

        {
          msg: 'ok',
          completed: false
        },

        {
          msg: 'hello',
          completed: false
        }

      ],

      formInput: ''

    }
  }

  //Functions

  setInputForm = event => {

    this.setState({

      ...this.state,
      formInput: event.target.value

    });   
    
    console.log(this.state.formInput)

  }

  setTodoList = event => {

    event.preventDefault();

    this.setState({

      todoList: [

        ...this.state.todoList,
        {
          msg: this.state.formInput,
          completed: false
        }
      ]

    });

  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoForm formInput={this.state.formInput} setInputForm={this.setInputForm} setTodoList={this.setTodoList}/>

        <TodoList todoList={this.state.todoList}/>

      </div>
    );
  }
}

export default App;
