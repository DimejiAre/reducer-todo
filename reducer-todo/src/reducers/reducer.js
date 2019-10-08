const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Learn about redux',
    completed: false,
    id: 3892987588
  },
]

function reducer (state, action){
    switch(action.type){
        case 'ADD_TODO':
            if(action.payload.item){
                return [...state, {item: action.payload.item, completed: false, id: new Date()}]
            }
        case 'MARK_COMPLETE':
            return state.map(todo => {
                if(todo.id === action.payload.item_id){
                    return {item: todo.item, completed: !todo.completed, id: todo.id}
                }
                return todo
            })
        case 'CLEAR_COMPLETED':
            return state.filter(todo => {
                if(todo.completed === false){
                    return todo
                }
            })
        default:
            return state;
    }

}

export {initialState, reducer}