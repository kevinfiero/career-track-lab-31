import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CharacterListItem.css';

const CharacterListItem = ({ image, name, id }) => (
  <Link to={`./${id}`}>
    <figure>
      <img src={image} />
      <figcaption>
        <h1>{name}</h1>
      </figcaption>
    </figure>
  </Link>
);

CharacterListItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default CharacterListItem;
