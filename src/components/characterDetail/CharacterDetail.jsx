import React from 'react';
import PropTypes from 'prop-types';
import './CharacterDetail.css';

const CharacterDetail = ({ image, name }) => (
  <section>
    <figure>
      <img src={image} />
      <figcaption>
        <h1>{name}</h1>
      </figcaption>
    </figure>
  </section>
);

CharacterDetail.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default CharacterDetail;
