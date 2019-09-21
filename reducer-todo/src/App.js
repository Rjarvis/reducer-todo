import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import './App.css';
import TODOForm from './components/Form.js';
import Reducer from './reducers/reducer.js';

function App() {
  return (
    <div className="App">
      <TODOForm/>
    </div>
  );
}

export default App;