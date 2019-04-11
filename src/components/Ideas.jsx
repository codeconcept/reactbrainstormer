import React from 'react';

const Ideas = ({ideas}) => {
  console.log('ideas', ideas)
  return (
    <ul>
      {ideas.map(idea => <li key={idea.id}>{idea.title}</li>)}
    </ul>
  )
}

export default Ideas;