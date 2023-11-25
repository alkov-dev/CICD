import { render, screen } from '@testing-library/react';
import { Raijin } from './components/raijin/raijin';

test('renders learn react link', () => {
  render(<Raijin />);
//   const linkElement = screen.getByText(/Raijin/i);
//   expect(linkElement).toBeInTheDocument();
});