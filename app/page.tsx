import Blog from "@/components/landing/blog";
import Hero from "@/components/landing/hero";
import Navbar from "@/components/landing/landing-nav";
import Projects from "@/components/landing/projects";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="relative w-screen">
          <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(135%_105%_at_50%_10%,#020817_40%,#63e_100%)]"></div>
          <Navbar />
          <Hero />
          <div className="h-56 invisible">-</div>
        </div>
      </div>
      <Projects />
    </>
  );
}
