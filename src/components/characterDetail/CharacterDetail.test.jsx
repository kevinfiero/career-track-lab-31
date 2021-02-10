import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail component', () => {
  afterEach(() => cleanup());
  it('renders CharacterDetail', () => {
    const { asFragment } = render(
      <CharacterDetail 
        image="https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333"
        name="Arnold Shortman"
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
