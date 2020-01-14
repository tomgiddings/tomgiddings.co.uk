import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Contact from './';

afterEach(cleanup);

it('Renders correctly', () => {
  const { asFragment } = render(<Contact />);
  expect(asFragment()).toMatchSnapshot();
});
