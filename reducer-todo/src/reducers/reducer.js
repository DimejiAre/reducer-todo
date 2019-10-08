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
        default:
            return state;
    }

}

export {initialState, reducer}