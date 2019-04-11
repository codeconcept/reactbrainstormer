import React from 'react';
import Idea from './Idea';

const Ideas = ({ideas}) => {
  console.log('ideas', ideas)
  return (
    <ul>
      {ideas.map(idea => <Idea key={idea.id} idea={idea} />)}
    </ul>
  )
}

export default Ideas;