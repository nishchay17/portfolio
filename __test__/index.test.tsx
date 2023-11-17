import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "../app/page";

describe("Home Page tests", () => {
  it("renders the heading", () => {
    const intersectionObserverMock = () => ({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = jest
      .fn()
      .mockImplementation(intersectionObserverMock);

    render(<Home />);
    const heading = screen.getByRole("heading", {
      name: /Hello there I am Nishchay/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
