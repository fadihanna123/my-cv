import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ProjectsSection from "../components/ProjectsSection";
import { it, expect } from "vitest";

it("Render ProjectsSection", () => {
  const { getByText } = render(<ProjectsSection />);
  expect(getByText(/Projects/)).toBeInTheDocument();
});
