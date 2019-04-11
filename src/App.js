import React, { useState } from 'react';

import './App.css';
import Form from './components/Form'
import Ideas from './components/Ideas'


const App = () => {
  const [ideas, setIdeas] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.elements);
    const [title, content] = event.target.elements;
    setIdeas([
      ...ideas,
      {
        id: Date.now(),
        title: title.value,
        content: content.value
      }     
    ]);
    // empties the form
    event.target.reset()
  };

  return (
    <div className="App">
      <h2>Brainstormer</h2>
      <Form onSubmit={handleFormSubmit} />
      <Ideas ideas={ideas}/>
    </div>
  );
}

export default App;
