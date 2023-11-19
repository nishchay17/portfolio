import { render } from "@testing-library/react";
import Hero from "../components/Landing/HeroSection";
import Social from "../components/Landing/Social";

describe("snapshot test for the home page", () => {
  it("renders hero section unchanged", () => {
    const { container } = render(<Hero />);
    expect(container).toMatchSnapshot();
  });
  it("renders social section unchanged", () => {
    const { container } = render(<Social />);
    expect(container).toMatchSnapshot();
  });
});
