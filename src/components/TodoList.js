// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
 import React from 'react';

 import Todo from './Todo';

 class TodoList extends React.Component {

    constructor (props) {

        super();

    }

    render() {

        let {todoList, itemClicked} = this.props;

        return (

            <ul>

                {
                
                todoList.map((item, index) => <Todo itemID={index} listItem={item} itemClicked={itemClicked}/>)
                
                }

            </ul>

        )

    }

 }

 export default TodoList;