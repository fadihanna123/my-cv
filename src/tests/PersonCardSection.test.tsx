import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import PersonCardSection from "../components/PersonCardSection";
import { it, expect } from "vitest";

it("Render PersonCardSection", () => {
  const { getByText } = render(<PersonCardSection />);
  expect(getByText(/Frontend developer/)).toBeInTheDocument();
});
