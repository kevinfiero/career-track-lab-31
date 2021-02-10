import React from 'react';
import CharacterList from '../../components/characterList/CharacterList';
import { useListPage } from '../../hooks/listPage';

const ListPage = () => {
  const { loading, characters } = useListPage();

  if(loading) return <li>Loading</li>;
  return (
    <CharacterList characters={characters} />
  );
};

export default ListPage;
