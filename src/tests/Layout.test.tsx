import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { it, expect } from "vitest";
import Layout from "../app/Layout";

it("Render Layout", () => {
  const { container } = render(<Layout />);
  expect(container.getElementsByClassName("container").length).toBe(1);
});
