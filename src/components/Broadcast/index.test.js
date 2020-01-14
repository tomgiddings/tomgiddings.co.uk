import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Broadcast from './';

afterEach(cleanup);

it('Renders correctly', () => {
  const { asFragment } = render(<Broadcast />);
  expect(asFragment()).toMatchSnapshot();
});
