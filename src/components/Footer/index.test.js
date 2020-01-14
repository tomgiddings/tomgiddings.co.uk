import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Footer from './';

afterEach(cleanup);

it('Renders correctly', () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});
