import React from 'react';

class Todo extends React.Component {

    constructor (props) {
        super();

    }

    render(addStrikeThrough) {

        let {listItem} = this.props;

        return (

            <li id={listItem.id} style={listItem.completed ? {'text-decoration': 'line-through'} : {'text-decoration': 'none'}}>{listItem.msg}</li>

        )

    }
}

export default Todo;