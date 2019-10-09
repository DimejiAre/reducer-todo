import React, {useState,useReducer} from 'react';
import { reducer, initialState } from '../reducers/reducer';
import '../scss/Todos.scss';

const ADD_TODO = 'ADD_TODO';
const MARK_COMPLETE = 'MARK_COMPLETE';
const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

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

    const markComplete = id => event => {
        event.preventDefault();
        dispatch({
            type: MARK_COMPLETE,
            payload: {item_id: id}
        })
    }

    const clearCompleted = event => {
        event.preventDefault();
        dispatch({
            type: CLEAR_COMPLETED
        })
    }

    const onChange = e => {
        setFormValue(e.target.value)
    }

    return (
        <div className='todos'>
            <form>
                <input value={formValue} onChange={onChange} type='text' />
                <button id='submit' onClick={addTodo} type='submit'>Enter</button>
            </form>
            <button id='clear' onClick={clearCompleted}>Clear Completed</button>
            <ul>
            {
                todos?
                todos.map(todo => (
                    <li className={'complete ' + (todo.completed? 'show' : 'hidden')}
                    key={todo.id} onClick={markComplete(todo.id)}>{todo.item}</li>
                ))
                : null
            }
            </ul>
        </div>   
    )
}

export default Todos;