import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Home from './';

afterEach(cleanup);

it('Renders matching snapshot', () => {
  const realDateNow = Date.now.bind(global.Date);
  const dateNowStub = jest.fn(() => 1530518207007);
  global.Date.now = dateNowStub;

  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});

it('Correctly creates a last login string', () => {
  const dateNowStub = jest.fn(() => new Date("January 09, 2020 01:02:03"));
  global.Date.now = dateNowStub;
  const { getByText } = render(<Home />);
  expect(getByText('Last login: Thu Jan 9 01:02:03 on ttys000')).toBeDefined();
});

it('Says good morning', () => {
  const dateNowStub = jest.fn(() => new Date("January 09, 2020 01:02:03"));
  global.Date.now = dateNowStub;
  const { getByText } = render(<Home />);
  expect(getByText('$ Good morning.')).toBeDefined();
});

it('Says good afternoon', () => {
  const dateNowStub = jest.fn(() => new Date("January 09, 2020 12:02:03"));
  global.Date.now = dateNowStub;
  const { getByText } = render(<Home />);
  expect(getByText('$ Good afternoon.')).toBeDefined();
});

it('Says good evening', () => {
  const dateNowStub = jest.fn(() => new Date("January 09, 2020 16:02:03"));
  global.Date.now = dateNowStub;
  const { getByText } = render(<Home />);
  expect(getByText('$ Good evening.')).toBeDefined();
});
