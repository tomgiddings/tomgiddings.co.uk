import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Nav from './';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);

it('Renders matching snapshot', () => {
  const { asFragment } = render(<BrowserRouter><Nav /></BrowserRouter>);
  expect(asFragment()).toMatchSnapshot();
});
