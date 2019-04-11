import React from 'react';

const Ideas = ({ideas}) => {
  return (
    <ul>
      {ideas.map(idea => <li key={idea.id}>{idea.title}</li>)}
    </ul>
  )
}

export default Ideas;