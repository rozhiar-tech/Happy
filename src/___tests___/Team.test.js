import { render, screen } from '@testing-library/react';
import Team from '../pages/Team/team';

test('should render team page', () => {
  render(<Team />);
  const teamPage = screen.getByTestId('teamPage');
  expect(teamPage).toBeInTheDocument();
  expect(teamPage).toHaveTextContent('WE ARE CODING, NICE TO MEET YOU!');
});