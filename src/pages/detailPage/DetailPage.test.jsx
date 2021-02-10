import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import characterDetailApiResponse from '../../fixtures/detailCharacter.json';
import DetailPage from './DetailPage';

const server = setupServer(
  rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters/5da237699734fdcb7bef8f51', (req, res, ctx) => {
    return res(ctx.json(characterDetailApiResponse));
  })
);

describe('DetailPage Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  afterEach(() => cleanup());
  it('displays a loading screen then a list of characters', async() => {
    await act(async() => {
      render(
        <Router>
          <DetailPage match={{ params: { id: '5da237699734fdcb7bef8f51' } }}/>
        </Router>
      );
    });
    const ul = screen.getByText('Loading');
    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });

  });
});
