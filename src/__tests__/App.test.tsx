import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the app', () => {
  render(<App />);
  // Corrigindo para o texto que realmente existe na página
  const linkElement = screen.getByText(/welcome to my ebooks/i);
  expect(linkElement).toBeInTheDocument();
});