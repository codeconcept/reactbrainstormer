import React from 'react';
import { Link } from 'react-router-dom';

import formatDate from 'date-fns/format'

const Idea = ({idea}) => {
  return(
    <div className="idea">
      <div className="idea-title">
        <Link to={`/idea-details/${idea.id}`}>
          {idea.title}
        </Link>
      </div>
      <div className="idea-date">{formatDate(idea.createdAt.seconds * 1000, 'ddd MMM Do HH:mm')}</div>
      <div>
        {idea.content}
      </div>
    </div>
  )
}

export default Idea;