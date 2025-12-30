import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { expect, it } from "vitest";

// Components
import ContactSection from "@app/containers/Contact/ContactSection";

it("Render ContactSection", () => {
  const { getByText } = render(<ContactSection />);
  expect(getByText(/Contact Me/)).toBeInTheDocument();
});
