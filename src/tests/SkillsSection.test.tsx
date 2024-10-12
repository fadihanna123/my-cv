import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { it, expect } from "vitest";
import { SkillsSection } from "../components";

it("Render SkillsSection", () => {
  const { getByText } = render(<SkillsSection />);
  expect(getByText(/Skills/)).toBeInTheDocument();
});
