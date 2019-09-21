import React, { useReducer } from 'react';

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

function Reducer()
{
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <>
        <div className="addTask">Task: {state.item}</div>
        <button onClick={() => dispatch({ type: 'addTask'})}>Add Task</button>
        <button onClick={() => dispatch({ type: 'taskComplete'})}>Completed</button>
        </>
    )
}


export default Reducer;