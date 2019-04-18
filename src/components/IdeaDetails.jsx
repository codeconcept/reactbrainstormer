import React from 'react';

const IdeaDetails = ({ match }) => {
  const id = match.params.id;
  return (
    <React.Fragment>
      <h1>details for {id}</h1>
    </React.Fragment>
  );
}
 
export default IdeaDetails;