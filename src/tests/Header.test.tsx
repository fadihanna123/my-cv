import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import Header from "../inc/Header";

it("Render Header", () => {
  const { getByText } = render(<Header />);
  expect(getByText(/Education/)).toBeInTheDocument();
});
