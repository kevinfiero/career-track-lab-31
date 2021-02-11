import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../app/App';
import './Header.css';

const Header = ({ onClick }) => {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = { backgroundColor: darkTheme ? 'white' : '#333' };

  return (  
    <div style={themeStyles}>
      <button onClick={onClick}>Toggle</button>
      <Link to="/" exact>
        <button>Home</button>
      </Link>
    </div>

  );

};

Header.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Header;
