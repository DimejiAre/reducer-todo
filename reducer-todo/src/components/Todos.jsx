import React, {useState,useReducer} from 'react';
import { reducer, initialState } from '../reducers/reducer';

const ADD_TODO = 'ADD_TODO';

function Todos(){

    const [todos, dispatch] = useReducer(reducer, initialState);
    const [formValue, setFormValue] = useState('');

    const addTodo = event => {
        event.preventDefault();
        dispatch({
            type: ADD_TODO,
            payload: {item: formValue}
        })
        setFormValue('');
    }

    const onChange = e => {
        setFormValue(e.target.value)
    }

    return (
        <div>
            <form>
                <input value={formValue} onChange={onChange} type='text' />
                <button onClick={addTodo} type='submit'>Enter</button>
            </form>
            <ul>
            {
                todos?
                todos.map(todo => (
                    <li key={todo.id}>{todo.item}</li>
                ))
                : null
            }
            </ul>
        </div>   
    )
}

export default Todos;