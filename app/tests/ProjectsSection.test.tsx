import ProjectsSection from "@app/containers/ProjectsSection";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { expect, it } from "vitest";

it("Render ProjectsSection", () => {
  const { getByText } = render(<ProjectsSection />);
  expect(getByText(/Projects/)).toBeInTheDocument();
});
