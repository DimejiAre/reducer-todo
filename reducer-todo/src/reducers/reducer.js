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
            return [...state, {item: action.payload.item, completed: 'false', id: new Date()}]
        default:
            return state;
    }

}

export {initialState, reducer}