// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react'

// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);

})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above

  const counterMessage =  screen.getByText(/counter/i);
  expect(counterMessage).toHaveTextContent('Counter');

});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above

  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');

});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above

  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);

  const incrementedCount = screen.getByTestId('count');
  expect(incrementedCount).toHaveTextContent('1');

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above

  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);

  const decrementedCount = screen.getByTestId('count');
  expect(decrementedCount).toHaveTextContent('-1');

});
