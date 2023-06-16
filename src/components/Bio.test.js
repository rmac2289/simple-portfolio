import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Bio from "./Bio";

test("renders header", () => {
  render(<Bio />);
  const headerElement = screen.getByText(/Bio/i);
  expect(headerElement).toBeInTheDocument();
});
test("renders paragraph text", () => {
  render(<Bio />);
  const paragraphElement = screen.getByText(/detail-oriented/i);
  expect(paragraphElement).toBeInTheDocument();
});
test("clicking 'read more' displays remainder of Bio", async () => {
  render(<Bio />);
  await userEvent.click(screen.getByText(/Read more/i));
  const paragraphElement = screen.getByText(/Prior/i);
  expect(paragraphElement).toBeInTheDocument();
});
