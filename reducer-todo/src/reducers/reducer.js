import React, { useState } from 'react';

const initialState = 
    { 
        item: 'Lear about reducers',
        completed: false,
        id:  Date().getTime()
    }
const reducer = (state) => {
    return 
    { 
        item: state.item;
        completed: state.completed;
        id: state.Date().getTime();
    };
}


export default {reducer, initialState};