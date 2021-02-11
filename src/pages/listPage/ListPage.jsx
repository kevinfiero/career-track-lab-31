import React, { useContext } from 'react';
import CharacterList from '../../components/characterList/CharacterList';
import { useListPage } from '../../hooks/listPage';
import { ThemeContext } from '../../components/app/App';


const ListPage = () => {
  const { loading, characters } = useListPage();
  const darkTheme = useContext(ThemeContext);
  const themeStyles = { backgroundColor: darkTheme ? 'white' : '#333' };

  if(loading) return <li>Loading</li>;
  return (
    <div style={themeStyles}>
      <CharacterList characters={characters} />
    </div>
  );
};

export default ListPage;
