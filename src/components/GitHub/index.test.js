import React from 'react';
import { render, cleanup } from '@testing-library/react';
import GitHub from './';

afterEach(cleanup);

it('Renders correctly', () => {
  const { asFragment } = render(<GitHub user="tomgiddings" />);
  expect(asFragment()).toMatchSnapshot();
});
