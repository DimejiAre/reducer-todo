import * as types from './actionTypes';

const initialState = []

function reducer (state, action){
    switch(action.type){
        case types.ADD_TODO:
            if(action.payload.item){
                return [...state, {item: action.payload.item, completed: false, id: new Date()}]
            }
            return state;
        case types.MARK_COMPLETE:
            return state.map(todo => {
                if(todo.id === action.payload.item_id){
                    return {item: todo.item, completed: !todo.completed, id: todo.id}
                }
                return todo
            })
        case types.CLEAR_COMPLETED:
            return state.filter(todo => {
                if(todo.completed === false){
                    return todo
                }
                return null
            })
        default:
            return state;
    }

}

export {initialState, reducer}