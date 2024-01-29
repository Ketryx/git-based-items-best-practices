import {render, screen} from '@testing-library/react';
import App from './App';

describe('App component @tests:ATP-4', () => {
    test('renders basic web application text', () => {
        render(<App/>);
        const textElement = screen.getByText(/basic web application/i);
        expect(textElement).toBeInTheDocument();
    });
})
