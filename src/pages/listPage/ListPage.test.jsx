import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import ListPage from './ListPage';

describe('ListPage Container', () => {
  afterEach(() => cleanup());
  it('displays a loading screen then a list of characters', async() => {
    render(<ListPage />);

    const ul = screen.getByText('Loading');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
