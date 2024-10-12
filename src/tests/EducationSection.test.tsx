import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import EducationSection from "../components/EducationSection";
import { it, expect } from "vitest";

it("Render EducationSection", () => {
  const { getByText } = render(<EducationSection />);
  expect(
    getByText(
      /High Education Diploma with specialization in Computer Engineering/,
    ),
  ).toBeInTheDocument();
});
