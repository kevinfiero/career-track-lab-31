import React, { useEffect, useState } from 'react';
import CharacterList from '../../components/characterList/CharacterList';
import { getCharacters } from '../../services/characterApi';

const ListPage = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((characters) => {
      setCharacters(characters);
      setLoading(false);
    });
  }, []);

  if(loading) return <ul>Loading</ul>;
  return <CharacterList characters={characters} />;

};

export default ListPage;
