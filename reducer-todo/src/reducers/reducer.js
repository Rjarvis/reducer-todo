import React, { useState } from 'react';

const initialState = 
    { 
        item: 'Lear about reducers',
        completed: false,
        id:  Date().getTime()
    }
const reducer = (state, action) => {
    switch(action.type)
    {
        case 'addTask':
            return
            {
                item: action.payload;
                completed: false;
                id: Date().getTime();
            };
        case 'taskComplete':
            return 
            {
                item: state.item;
                completed: action.payload;
                id: state.id;
            };
        default: return state;
    }
    /*
    if(action.type === 'addTask') {
        return 
        { 
            item: action.payload;
            completed: false;
            id: Date().getTime();
        };
    }

    if(action.type === 'taskComplete'){
        return 
        {
            item: state.item;
            completed: action.payload;
            id: state.id
        };
    }*/
}


export default reducer(initialState);