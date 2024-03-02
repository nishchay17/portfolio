"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

import Hero from "@/components/landing/hero";
import Navbar from "@/components/landing/nav/landing-nav";
import StickyNav from "@/components/landing/nav/sticky-nav";
import Projects from "@/components/landing/project/projectsSection";
import Tech from "@/components/landing/techSection";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <ReactLenis root options={{ lerp: 0, duration: 1, smoothWheel: true }}>
      <Navbar />
      <Hero />
      <StickyNav />
      <Projects />
      <Tech />
      <Footer />
    </ReactLenis>
  );
}
