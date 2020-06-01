import React from 'react';

class TodoForm extends React.Component {

    constructor (props) {

        super();

    }

    render() {

        let {formInput} = this.props;

        return (

            <form>

                <label>
                    <input type='text'/>
                </label>

                <button>Add to list</button>

            </form>

            )

    }

}

export default TodoForm;