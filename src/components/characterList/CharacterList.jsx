import React from 'react';
import PropTypes from 'prop-types';
import CharacterListItem from './CharacterListItem';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map(character => (
    <li key={character.id}>
      <CharacterListItem image={character.image} name={character.name} id={character.id} />
    </li>
  ));

  return (
    <ul data-testid="characters">
      {characterElements}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default CharacterList;
