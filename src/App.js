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

  setInputForm = event => { //Called onChange on the input

    this.setState({

      ...this.state,
      formInput: event.target.value

    });   
    
    console.log(this.state.formInput)

  }

  setTodoList = event => { //Called onClick on the add button

    event.preventDefault();


  }

  itemClicked = event => { //When you click a list item it changed the 'completed' object property in state

    let newTodoList = [

      ...this.state.todoList,

    ]

    newTodoList[event.target.id] = {

      ...newTodoList[event.target.id],
      completed: !newTodoList[event.target.id].completed

    }

    this.setState({

      todoList: [

        ...newTodoList

      ],

      ...this.state.formInput

    });

  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>

        <TodoForm formInput={this.state.formInput} setInputForm={this.setInputForm} setTodoList={this.setTodoList}/>

        <TodoList todoList={this.state.todoList} itemClicked={this.itemClicked}/>

      </div>
    );
  }
}

export default App;
