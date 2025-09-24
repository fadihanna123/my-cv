import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import Footer from "../inc/Footer";

it("Render Footer", () => {
  const { getByText } = render(<Footer />);
  expect(getByText(/Download My CV/)).toBeInTheDocument();
});
