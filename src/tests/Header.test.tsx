import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Header from "../inc/Header";
import { it, expect } from "vitest";

it("Render Header", () => {
  const { getByText } = render(<Header />);
  expect(getByText(/Education/)).toBeInTheDocument();
});
