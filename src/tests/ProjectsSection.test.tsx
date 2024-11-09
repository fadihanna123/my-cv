import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import ProjectsSection from "../components/ProjectsSection";

it("Render ProjectsSection", () => {
  const { getByText } = render(<ProjectsSection />);
  expect(getByText(/Projects/)).toBeInTheDocument();
});
