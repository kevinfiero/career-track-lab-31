import { useState, useEffect } from 'react';
import { getCharacterBio } from '../services/characterApi';

export const useDetailPage = (props) => {
  const [loading, setLoading] = useState(true);
  const [characterBio, setCharacterBio] = useState({});

  useEffect(() => {
    getCharacterBio(props.match.params.id).then((characterBio) => {
      setCharacterBio(characterBio);
      setLoading(false);
    });
  }, []);

  return {
    loading,
    characterBio
  };
};
