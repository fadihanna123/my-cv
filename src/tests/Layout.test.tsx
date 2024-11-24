import Layout from "@app/Layout";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { expect, it } from "vitest";

it("Render Layout", () => {
  const { container } = render(<Layout />);
  expect(container.getElementsByClassName("container").length).toBe(1);
});
