import React from 'react';

class Todo extends React.Component {

    constructor (props) {
        super();

    }

    render() {

        let {listItem} = this.props;

        return (

            <li>{listItem}</li>

        )

    }
}

export default Todo;