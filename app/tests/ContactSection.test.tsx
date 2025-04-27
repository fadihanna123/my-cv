import ContactSection from "@app/containers/ContactSection";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { expect, it } from "vitest";

it("Render EducationSection", () => {
  const { getByText } = render(<ContactSection />);
  expect(getByText(/Contact Me/)).toBeInTheDocument();
});
