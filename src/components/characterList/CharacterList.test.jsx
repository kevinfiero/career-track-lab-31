import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';

describe('CharacterList component', () => {
  afterEach(() => cleanup());
  it('renders CharacterList', () => {
    const { asFragment } = render(
      <Router>
        <CharacterList 
          characters = 
            {[
              {
                image:'https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333',
                name:'Arnold Shortman',
                id:'5da237699734fdcb7bef8f51'
              },
              {
                image:'https://vignette.wikia.nocookie.net/heyarnold/images/7/79/GrandpaPhil.png/revision/latest/scale-to-width-down/300?cb=20160924030436',
                name:'Grandpa Phil',
                id:'5da237699734fdcb7bef8f52'
              }
            ]}
        />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
