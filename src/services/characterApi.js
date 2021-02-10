const fetch = require('node-fetch');
 
export const getCharacters = () => {
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=20&page=1')
    .then(res => res.json())
    .then((characters) =>
      characters.map((character) => (
        {
          image: character.image,
          name: character.name,
          id: character._id
        }
      ))
    );
};

export const getCharacterBio = (id) => {
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`)
    .then(res => res.json())
    .then((character) => character =
      {
        id: character._id,
        image: character.image,
        name: character.name,
      }
    );
};
