"use client";

import Link from "next/link";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

import { projects } from "@/config/project";
import { Button } from "@/ui/button";
import StaggerText from "@/ui/staggerText";
import RevealBox from "@/ui/revealBox";
import ProjectCard from "./proejectCard";
import { useIntersectionObserver } from "@/hooks/use-intersector";
import { useNav } from "@/context/nav-context";

export default function Projects() {
  const { scrollYProgress } = useScroll();
  const translateX = useTransform(scrollYProgress, [0, 1], [-1000, 1000]);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const horizontalScroll = useScroll({
    target: targetRef,
  });
  const x = useTransform(
    horizontalScroll.scrollYProgress,
    [0, 1],
    ["1%", `-65%`]
  );

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.1,
  });
  const { handleCurrentNav } = useNav();
  if (isIntersecting) {
    handleCurrentNav("Projects");
  }

  return (
    <div className="border-t-[0.5px] border-white/20">
      <div className="overflow-hidden whitespace-nowrap px-2 my-4 select-none">
        <motion.div style={{ translateX }}>
          {Array(40)
            .fill("Show case")
            .map((it, idx) => (
              <span
                className="text-para-sm opacity-40 mr-4 uppercase"
                key={idx}
              >
                {it}{" "}
              </span>
            ))}
        </motion.div>
      </div>
      <div ref={ref}>
        <div
          id="projects"
          className="relative h-[calc(40vh*12)]"
          ref={targetRef}
        >
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_300px_at_5%_30%,#3e3e3e,transparent)]"></div>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:16px_16px]"></div>
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_320px_at_90%_65%,#3e3e3e76,transparent)]"></div>
            <motion.div style={{ x }} className="flex gap-[3vw]">
              <div className="pr-12 md:pr-32 flex flex-col">
                <StaggerText
                  className="text-heading font-medium mb-8"
                  text="Projects"
                />
                <RevealBox>
                  <p className="text-para-sm opacity-80">
                    A showcase of all my work, <br />
                    mainly created in Next js, and javascript
                  </p>
                </RevealBox>
                <Button size="lg" variant="cfa" asChild>
                  <Link
                    className="mt-auto w-fit"
                    href={
                      "https://www.linkedin.com/in/nishchay-trivedi-61219978"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact me
                  </Link>
                </Button>
              </div>
              {projects.map((project) => (
                <div key={project.id} className={"h-[70vh] w-[38vw]"}>
                  <ProjectCard project={project} key={project.id} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
