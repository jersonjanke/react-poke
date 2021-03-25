import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Footer from './../components/Footer';

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('render Footer', () => {
    act(() => {
        render(<Footer />, container);
    });

    expect(container.textContent).toBe('Footer');
})