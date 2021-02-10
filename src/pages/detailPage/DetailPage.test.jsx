import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import DetailPage from './DetailPage';

describe('DetailPage Container', () => {
  afterEach(() => cleanup());
  it('displays a loading screen then a list of characters', async() => {
    render(
      <DetailPage 
        match={{ params: { id: '5f5fb4bbbfd05c2aed82e462' } }}
      />
    );

    const ul = screen.getByText('Loading');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
