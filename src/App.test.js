import { render, screen } from '@testing-library/react';
import App from './App';

test('renders pokemon link', () => {
  render(<App />);
  const linkElement = screen.getByText(/pokemon/i);
  expect(linkElement).toBeInTheDocument();
});
