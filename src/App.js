import React, { useState, useEffect } from 'react';

import './App.css';
import Form from './components/Form';
import Ideas from './components/Ideas';
import { db } from './firebase';

const App = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    return db.collection('ideas').onSnapshot(snapshot => {
      console.log('snapshot', snapshot);
      let docs = [];
      snapshot.forEach(doc => {
        docs = [
          {
            ...doc.data(),
            id: doc.id
          },
          ...docs
        ];
      }); // end forEach

      // set new react component state
      setIdeas(docs)
    });

  }, []);

  const saveToDB = (idea) => {
    return db.collection('ideas').add(idea)
  }
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.elements);
    const [title, content] = event.target.elements;
    saveToDB({
      title: title.value, 
      content: content.value
    }).catch(console.error)
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
