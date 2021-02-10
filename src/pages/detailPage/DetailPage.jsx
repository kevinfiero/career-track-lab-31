import React from 'react';
import PropTypes from 'prop-types';
import CharacterDetail from '../../components/characterDetail/CharacterDetail';
import { useDetailPage } from '../../hooks/detailPage';

const DetailPage = (props) => {
  const { loading, characterBio } = useDetailPage(props);

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
