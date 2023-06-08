import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';


test('prev button initialy not abled', async () => {
  render(<App />);
  const firstButton = screen.getByTestId('test-first');
  expect(firstButton).toHaveClass('disabled');
});


test('prev button being able to click after next button clicked', async () => {
  render(<App />);
  const firstButton = screen.getByTestId('test-first');

  await userEvent.click(screen.getByText('next'))
  expect(firstButton).not.toHaveClass('disabled');
});
