"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

import Blog from "@/components/landing/blog";
import Hero from "@/components/landing/hero";
import Navbar from "@/components/landing/nav/landing-nav";
import StickyNav from "@/components/landing/nav/sticky-nav";
import Projects from "@/components/landing/projectsSection";

export default function Home() {
  return (
    <ReactLenis root options={{ lerp: 0, duration: 1, smoothWheel: true }}>
      <Navbar />
      <Hero />
      <StickyNav />
      <Projects />
      <div className="h-screen w-full" />
    </ReactLenis>
  );
}
