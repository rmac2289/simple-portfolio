import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "../components/Contact";

describe("contact icon section", () => {
  test("renders icons with correct hrefs", () => {
    render(<Contact />);
    const icons = screen.getAllByRole("link");
    expect(icons).toHaveLength(3);

    const linkedInIcon = icons[0];
    const githubIcon = icons[1];
    const resumeIcon = icons[2];
    expect(linkedInIcon).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/rsmacdonald/"
    );
    expect(githubIcon).toHaveAttribute(
      "href",
      "https://www.github.com/rmac2289"
    );
    expect(resumeIcon).toHaveAttribute("href", "#");
  });
});
