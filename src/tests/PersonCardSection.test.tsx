import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import PersonCardSection from "../components/PersonCardSection";

it("Render PersonCardSection", () => {
  const { getByText } = render(<PersonCardSection />);
  expect(getByText(/Frontend developer/)).toBeInTheDocument();
});
