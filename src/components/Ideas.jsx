import React from 'react';
import Idea from './Idea';

const Ideas = ({ideas}) => {
  console.log('ideas', ideas)
  return (
    <ul className="ideas">
      {ideas.map(idea => <Idea key={idea.id} idea={idea} className="idea" />)}
    </ul>
  )
}

export default Ideas;