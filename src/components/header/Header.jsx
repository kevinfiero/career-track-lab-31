import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (  
    <Link to="/" exact>
      <button>Home</button>
    </Link>
  );

};

export default Header;
