import { render, screen } from '@testing-library/react';
import App from './App';

test('render weather app', () => {
    render(<App />);
    const linkElement = screen.getByText(/weather app/i);
    expect(linkElement).toBeInTheDocument();
});