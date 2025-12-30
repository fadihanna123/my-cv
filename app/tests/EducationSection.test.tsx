import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { expect, it } from "vitest";

// Components
import EducationSection from "@components/EducationSection";

it("Render EducationSection", () => {
  const { getByText } = render(<EducationSection />);
  expect(
    getByText(
      /High Education Diploma with specialization in Computer Engineering/,
    ),
  ).toBeInTheDocument();
});
