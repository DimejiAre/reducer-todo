import React, {useReducer} from 'react';
import { reducer, initialState } from '../reducers/reducer';

function Todos(){

    const [todos, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
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