import React from 'react';

class Todo extends React.Component {

    constructor (props) {
        super();

    }

    render(addStrikeThrough) {

        let {listItem, itemClicked, itemID} = this.props;

        return (

            <li 
            id={itemID}
            style={listItem.completed ? {'text-decoration': 'line-through'} : {'text-decoration': 'none'}}
            onClick={event => itemClicked(event)}>
            
                {listItem.msg}
            
            </li>

        )

    }
}

export default Todo;