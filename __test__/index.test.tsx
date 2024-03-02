import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import mockRouter from "next-router-mock";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

import Hero from "../components/Landing/HeroSection";
import Projects from "../components/landing/project/projectsSection";
import Tech from "../components/landing/techSection";
import { projects } from "../config/project";
import TECH from "../config/tech";

jest.mock("next/router", () => jest.requireActual("next-router-mock"));

beforeAll(() => {
  const intersectionObserverMock = () => ({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = jest
    .fn()
    .mockImplementation(intersectionObserverMock);
});

describe("Home Page tests", () => {
  it("renders the hero heading", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", {
      name: /Hello there I am Nishchay/i,
    });
    expect(heading).toBeInTheDocument();
  });
  it("renders all the projects", () => {
    render(<Projects projects={[...projects]} />);
    projects.forEach((project) => {
      const heading = screen.getByText(project.name);
      expect(heading).toBeInTheDocument();
    });
  });
  it("redirects to project page on chick", () => {
    mockRouter.push("/");
    render(<Projects projects={[{ ...projects[0] }]} />, {
      wrapper: MemoryRouterProvider,
    });
    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
    fireEvent.click(link);
    expect(mockRouter.asPath).toEqual(`/project/${projects[0].id}`);
  });
  it("renders all the technologies", () => {
    render(<Tech techs={[...TECH]} />);
    TECH.forEach((tech) => {
      const techText = screen.getByText(tech);
      expect(techText).toBeInTheDocument();
    });
  });
});
