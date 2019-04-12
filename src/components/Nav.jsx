import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <React.Fragment>
      <Link to='/' className="right-pad">Home</Link>
      <Link to='/ideas' className="right-pad">All ideas</Link>
      <Link to='/new-idea' className="right-pad">New Idea</Link>
      <Link to='/login' className="right-pad">Login</Link>
      <Link to='/signup' className="right-pad">Sign up</Link>
    </React.Fragment>
  )
};

export default Nav;
