import { render, screen } from "@testing-library/react";
import App from "./App";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
test("renders app", () => {
  render(<App />);
  const title = screen.getByText(/Ross MacDonald/i);
  expect(title).toBeInTheDocument();
});
