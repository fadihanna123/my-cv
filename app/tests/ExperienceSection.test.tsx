import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { expect, it } from "vitest";

// Components
import ExperienceSection from "@components/ExperienceSection";

it("Render ExperienceSection", () => {
  const { getByText } = render(<ExperienceSection />);
  expect(getByText(/Experience/)).toBeInTheDocument();
});
