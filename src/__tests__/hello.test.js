import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Hello from '../components/Hello';

let container = null;

beforeEach(() => {
  //Setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with or without a name', () => {
  act(() => {
    render(<Hello />, container);
  });
  expect(container.textContent).toBe('Hey, stranger');

  act(() => {
    render(<Hello name="Jerson" />, container);
  });
  expect(container.textContent).toBe('Hello, Jerson');
});
