import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Contact from './../components/Contact';
import MockedMap from './../components/Map';

jest.mock('./../components/Map', () => {
  return function DummMap(props) {
    return (
      <div data-testid="map">
        {props.center.lat}:{props.center.long}
      </div>
    );
  };
});

let container = null;
beforeEach(() => {
  //setup a DOM element as a render targer
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  //cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('should render contact information', () => {
  const center = { lat: 0, long: 0 };
  act(() => {
    render(
      <Contact
        name="Joni Baez"
        email="test@exemple.com"
        site="http://test.com"
        center={center}
      />,
      container
    );
  });
  expect(
    container.querySelector("[data-testid='email']").getAttribute('href')
  ).toBe('mailto:test@exemple.com');

  expect(
    container.querySelector('[data-testid="site"]').getAttribute('href')
  ).toEqual('http://test.com');

  expect(container.querySelector('[data-testid="map"]').textContent).toEqual(
    '0:0'
  );
});
