import React from 'react';

import './App.css';
import Form from './components/Form'
import Ideas from './components/Ideas'

const App = () => {
  return (
    <div className="App">
      <h2>Brainstormer</h2>
      <Form />
      <Ideas />
    </div>
  );
}

export default App;
