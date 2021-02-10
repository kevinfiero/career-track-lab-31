import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { act } from 'react-dom/test-utils';
import charactersApiResponse from '../../fixtures/characters.json';
import ListPage from './ListPage';

const server = setupServer(
  rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters/', (req, res, ctx) => {
    return res(ctx.json(charactersApiResponse));
  })
);

describe('ListPage Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  afterEach(() => cleanup());
  it('displays a loading screen then a list of characters', async() => {
    await act(() => {
      render(<ListPage />);

      const ul = screen.getByText('Loading');

      return waitFor(() => {
        expect(ul).not.toBeEmptyDOMElement();
      });
    });
  });
});
