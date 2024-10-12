import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ExperienceSection from "../components/ExperienceSection";
import { it, expect } from "vitest";

it("Render ExperienceSection", () => {
  const { getByText } = render(<ExperienceSection />);
  expect(getByText(/Experience/)).toBeInTheDocument();
});
