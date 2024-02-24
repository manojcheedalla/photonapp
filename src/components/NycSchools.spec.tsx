import { render, screen } from '@testing-library/react';
import NycSchools  from './NycSchools';


test('renders NycSchools', () => {
  render(<NycSchools />);
  const dbn = screen.getByTestId('school-dbn')
  expect(dbn).toBeInTheDocument()

  const name = screen.getByTestId('school-name')
  expect(name).toBeInTheDocument()


});

