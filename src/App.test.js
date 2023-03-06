import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Copyright by Sam Ayoub - Little Lemon Restaurant/i);
  expect(linkElement).toBeInTheDocument();
});
