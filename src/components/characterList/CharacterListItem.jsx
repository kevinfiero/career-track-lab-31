import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
//import './Character.css';

const CharacterListItem = ({ image, name, id }) => (
  <Router>
    <Link to={`./${id}`}>
      <figure>
        <img src={image} />
        <figcaption>
          <h1>{name}</h1>
        </figcaption>
      </figure>
    </Link>
  </Router>

);

CharacterListItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default CharacterListItem;
