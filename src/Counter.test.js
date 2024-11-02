import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./store";

test("increments and decrements the counter", () => {
  const store = createStore(reducer);

  render(
    <Provider store={store}>
      <Counter />
    </Provider>,
  );

  const countValue = screen.getByTestId("count-value");
  const incrementButton = screen.getByText(/Increment/i);
  const decrementButton = screen.getByText(/Decrement/i);

  // Initial count should be 0
  expect(countValue).toHaveTextContent("0");

  // Click increment and check count
  fireEvent.click(incrementButton);
  expect(countValue).toHaveTextContent("1");

  // Click decrement and check count
  fireEvent.click(decrementButton);
  expect(countValue).toHaveTextContent("0");
});
