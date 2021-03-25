import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Detail from './../components/Detail';

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('render detail', () => {
    act(() => {
        render(<Detail />, container);
    });

    expect(container.textContent).toBe('Detail');
});