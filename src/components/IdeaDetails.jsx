import React from 'react';

const IdeaDetails = ({ match }) => {
  console.log('details', match.params);
  const id = match.params.id;
  return (
    <React.Fragment>
      <h1>details for {id}</h1>
    </React.Fragment>
  );
}
 
export default IdeaDetails;