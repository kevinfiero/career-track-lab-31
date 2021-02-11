import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CharacterDetail from '../../components/characterDetail/CharacterDetail';
import { useDetailPage } from '../../hooks/detailPage';
import { ThemeContext } from '../../components/app/App';


const DetailPage = (props) => {
  const { loading, characterBio } = useDetailPage(props);
  const darkTheme = useContext(ThemeContext);
  const themeStyles = 
  { 
    backgroundColor: darkTheme ? 'white' : '#333',
    color: darkTheme ? '#333' : 'white'
  };

  if(loading) return <ul>Loading</ul>;
  return (
    <div style={themeStyles}>
      <CharacterDetail 
        image= {characterBio.image}
        name= {characterBio.name}
        id={characterBio.id}
      />
    </div>

  );
};

DetailPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default DetailPage;
