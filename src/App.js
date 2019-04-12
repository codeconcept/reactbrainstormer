import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Form from './components/Form';
import Ideas from './components/Ideas';
import IdeaDetails from './components/IdeaDetails';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { db } from './firebase';

const App = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    return db.collection('ideas')
              .orderBy('createdAt')
              .onSnapshot(snapshot => {
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
      content: content.value,
      createdAt: new Date()
    }).catch(console.error)
    // empties the form
    event.target.reset()
  };

  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/ideas" render={() => (
          <Ideas ideas={ideas} />
        )} />
        <Route path="/idea-details/:id" component={IdeaDetails} />
        <Route path="/new-idea" render={() => (
          <Form onSubmit={handleFormSubmit} />
        )} />
      </Router>
    </div>
  );
}

export default App;
