import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CharacterDetail from '../../components/characterDetail/CharacterDetail';
import { getCharacterBio } from '../services/characterApi';

const DetailPage = (props) => {
  const [loading, setLoading] = useState(true);
  const [characterBio, setCharacterBio] = useState({});

  useEffect(() => {
    getCharacterBio(props.match.params.id).then((characterBio) => {
      setCharacterBio(characterBio);
      setLoading(false);
    });
  }, []);

  if(loading) return <ul>Loading</ul>;
  return (
    <CharacterDetail 
      image= {characterBio.image}
      name= {characterBio.name}
      id={characterBio.id}
    />
  );
};

DetailPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default DetailPage;
