import { render, screen} from '@testing-library/react';
import Career from '../pages/Career';

test("should render Career page",  () => {
    render(<Career />);
    expect(screen.getByTestId("career")).toBeInTheDocument();
  });