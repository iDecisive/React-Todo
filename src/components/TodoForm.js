import React from 'react';

// class TodoForm extends React.Component {

//     constructor (props) {

//         super();

//     }

//     render() {

//         let {formInput, setInputForm} = this.props;

//         return (

//             <form>

//                 <label>
//                     <input 
//                     type='text'
//                     onChange={setInputForm}/>
//                 </label>

//                 <button>Add to list</button>

//                 <h1>Temp: {formInput}</h1>

//             </form>

//             )

//     }

// }

let TodoForm = props => {


        let {formInput, setInputForm, setTodoList} = props;

        return (

            <form onSubmit={event => setTodoList(event)}>

                <label>
                    <input 
                    type='text'
                    onChange={event => setInputForm(event)}
                    value={formInput}/>
                </label>

                <button>Add to list</button>

                <h1>Temp: {formInput}</h1>

            </form>

            )


}

export default TodoForm;