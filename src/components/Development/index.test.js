import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Development from './';

afterEach(cleanup);

it('Renders correctly', () => {
  const { asFragment } = render(<Development />);
  expect(asFragment()).toMatchSnapshot();
});
