import React from 'react';

const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="new idea" className="elem-width"/><br/>
      <textarea className="elem-width"></textarea><br/>
      <button>create</button>
    </form>
  )
}

export default Form;