import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectDrawer from "../components/ProjectModal";

describe("project modal", () => {
  test("modal renders", () => {
    render(
      <ProjectDrawer
        modalName="Parkfinder"
        isOpen={true}
        onClose={() => {}}
        isSmallScreen={false}
      />
    );
    const modalHeader = screen.getByRole("heading");
    expect(modalHeader).toBeInTheDocument();

    const techStack = screen.getByText(/Tech stack/i);
    expect(techStack).toBeInTheDocument();

    const modalImage = screen.getByAltText("Parkfinder");
    expect(modalImage).toBeInTheDocument();

    const text = screen.getByText(/Californians/i);
    expect(text).toBeInTheDocument();
  });
});
