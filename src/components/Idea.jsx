import React from 'react';

const Idea = ({idea}) => {
  return(
    <div className="idea">
      <div className="idea-title">{idea.title}</div>
      <div className="idea-date">{idea.createdAt.toDate().toString()}</div>
      <div>
        {idea.content}
      </div>
    </div>
  )
}

export default Idea;