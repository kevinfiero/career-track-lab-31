import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import CharacterListItem from './CharacterListItem';

describe('CharacterListItem component', () => {
  afterEach(() => cleanup());
  it('renders CharacterListItem', () => {
    const { asFragment } = render(
      <Router>
        <CharacterListItem 
          image="https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333"
          name="Arnold Shortman"
          id="5da237699734fdcb7bef8f51"
        />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
