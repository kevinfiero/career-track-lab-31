import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//import './Header.css';

const Header = () => {

  return (  
    <Link to="/" exact>
      <button>Home</button>
    </Link>
  );

};

export default Header;
