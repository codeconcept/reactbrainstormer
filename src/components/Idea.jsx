import React from 'react';
import formatDate from 'date-fns/format'

const Idea = ({idea}) => {
  return(
    <div className="idea">
      <div className="idea-title">{idea.title}</div>
      <div className="idea-date">{formatDate(idea.createdAt.seconds * 1000, 'ddd MMM Do HH:mm')}</div>
      <div>
        {idea.content}
      </div>
    </div>
  )
}

export default Idea;