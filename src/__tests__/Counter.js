import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Counter from '../atoms/Counter';

afterEach(() => localStorage.removeItem('count'))

test('counter intitalize to 0 by default', () => {
    const { container } = render(<Counter />);
    const button = container.firstChild;
    expect(button.textContent).toBe('0');
});

test('counter increments the count', () => {
    const { container } = render(<Counter initial={0} />);
    const button = container.firstChild;
    expect(button.textContent).toBe('0');
    
    fireEvent.click(button);

    expect(button.textContent).toBe('1');
});

test('counter starts from 2 and increments by 2', () => {
    const { container } = render(<Counter initial={2} step={2} />);
    const button = container.firstChild;
    expect(button.textContent).toBe('2');
    
    fireEvent.click(button);

    expect(button.textContent).toBe('4');
});

