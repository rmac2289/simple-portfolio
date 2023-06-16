import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "./Contact";

test("renders icons", () => {
  render(<Contact />);
  const icons = screen.getAllByRole("link");
  expect(icons).toHaveLength(3);
});
