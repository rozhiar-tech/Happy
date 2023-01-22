import { render, screen } from '@testing-library/react';
import About from '../pages/About/About';

test('should render About page', () => {
  render(<About />);
  const aboutPage = screen.getByTestId('aboutPage');
  expect(aboutPage).toBeInTheDocument();
  expect(aboutPage).toHaveTextContent('HEALING!');
});