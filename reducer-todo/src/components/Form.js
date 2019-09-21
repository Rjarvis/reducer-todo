import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Reducer from '../reducers/reducer.js';


class TODOForm extends React.Component {
   constructor(props) {
       super(props);
       this.state = {value: ''};

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   }
   
   handleChange(event) {
       this.setState({value: event.target.value});
   }

   handleSubmit(event) {
       alert('Submit success' + this.state.value);
       event.preventDefault();
   }

   render() {
       return(
           <form onSubmit={this.handleSubmit}>
                <label>
                   TODO:
                   <input type="text" todo="todo" />
                </label>
                <input type="submit" value={Reducer()} />
            </form>
        );
    }    
}

export default TODOForm;