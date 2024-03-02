"use client";

import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import { projects } from "@/config/project";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";
import { Badge } from "@/ui/badge";
import StaggerText from "@/ui/staggerText";
import RevealBox from "@/ui/revealBox";

const bagdeClass = {
  "No longer supported": "bg-red-200",
  New: "bg-green-200",
};

export default function Projects() {
  const groupedProjects = [
    [projects[0], projects[1]],
    [projects[2], projects[3]],
    [projects[4], projects[5]],
  ];

  const { scrollYProgress } = useScroll();
  const translateX = useTransform(scrollYProgress, [0, 1], [-1000, 1000]);

  const targetRef = useRef<HTMLDivElement | null>(null);
  const horizontalScroll = useScroll({
    target: targetRef,
  });
  const x = useTransform(
    horizontalScroll.scrollYProgress,
    [0, 1],
    ["1%", "-70%"]
  );

  return (
    <div className="border-t-[0.5px] border-white/20">
      <div className="overflow-hidden whitespace-nowrap px-2 my-4 select-none">
        <motion.div style={{ translateX }}>
          {Array(40)
            .fill("Show case")
            .map((it, idx) => (
              <span className="text-xl opacity-40 mr-4 uppercase" key={idx}>
                {it}{" "}
              </span>
            ))}
        </motion.div>
      </div>
      <div id="projects" className="relative h-[calc(40vh*12)]" ref={targetRef}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_300px_at_5%_30%,#3e3e3e,transparent)]"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:16px_16px]"></div>
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_320px_at_90%_65%,#3e3e3e76,transparent)]"></div>
          <motion.div style={{ x }} className="flex gap-16">
            <div className="pr-32 flex flex-col">
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
              <Link
                className="mt-auto w-fit"
                href={"https://www.linkedin.com/in/nishchay-trivedi-61219978"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="uppercase font-extrabold bg-yellow-300 hover:bg-yellow-400"
                >
                  Contact me
                </Button>
              </Link>
            </div>
            {projects.map((project) => (
              <div
                key={project.id}
                className={
                  "w-[40vw] h-[70vh] max-w-[700px] flex items-end justify-center relative"
                }
              >
                <div
                  className={
                    "w-[98%] h-[98%] hover:size-full transition-all ease-in-out duration-500 rounded-xl" +
                    " py-5 px-6 border-[0.5px] border-white/20 bg-transparent cursor-pointer relative"
                  }
                >
                  <div className="flex items-center justify-between gap-4 mt-4 flex-col md:flex-row">
                    <p className="text-3xl">{project.name}</p>
                    <div className="flex items-center gap-4">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          className="px-0 group uppercase tracking-wider text-base transition-all"
                          variant="link"
                          size="sm"
                        >
                          <span>github</span>
                          <ArrowTopRightIcon className="ml-1 size-6 opacity-0 group-hover:opacity-100 transition-all" />
                        </Button>
                      </Link>
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          className="px-0 group uppercase tracking-wider text-base transition-all"
                          variant="link"
                          size="sm"
                        >
                          <span>Visit</span>
                          <ArrowTopRightIcon className="ml-1 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  {[project.createdOn, ...(project.additionalTags ?? [])]?.map(
                    (tag) => (
                      <Badge
                        key={tag}
                        className={cn(
                          bagdeClass[tag as keyof typeof bagdeClass] ??
                            "bg-yellow-200",
                          "flex-shrink-0 mt-2 mr-2"
                        )}
                      >
                        {tag}
                      </Badge>
                    )
                  )}
                  <p className="text-lg mt-4 text-primary/80 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="absolute inset-0 size-full bg-zinc-950/10 backdrop-blur-xl -z-20" />
                </div>
                <Image
                  className="absolute -z-10 bottom-0 group right-1/2 translate-x-1/2 w-[90%] max-w-[700px] rounded-t-xl"
                  src={`/img/${project.image}`}
                  alt={project.name}
                  width={700}
                  height={700}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function projectsSectionOld() {
  const groupedProjects = [
    [projects[0], projects[1]],
    [projects[2], projects[3]],
    [projects[4], projects[5]],
  ];
  return (
    <section className="container my-60">
      <div className="flex gap-4 relative z-10">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-[#fff0] to-[#020817ad]" />
        {groupedProjects.map((grouped, idx) => (
          <div key={idx} className="flex gap-4 flex-col">
            {grouped.map((project) => (
              <Image
                className="rounded w-full"
                key={project.id}
                src={`/img/${project.image}`}
                alt={project.name}
                width={400}
                height={400}
                draggable={false}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="relative h-full w-full">
        <div className="-z-10 absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <h3 className="text-hero text-center -mt-14 z-20 relative">Projects</h3>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-36 max-w-[1000px] mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-white/20 rounded py-5 px-6"
            >
              <div className="flex items-start justify-between gap-4 flex-col md:flex-row">
                <p className="text-xl">{project.name}</p>
                {project.additionalTags?.map((tag) => (
                  <Badge
                    key={tag}
                    className={cn(
                      bagdeClass[tag as keyof typeof bagdeClass] ?? "",
                      "flex-shrink-0"
                    )}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-lg mt-4 text-primary/80 line-clamp-3">
                {project.description}
              </p>
              <div className="flex gap-2 mt-4">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                >
                  <Button size="sm" variant="outline">
                    Github
                  </Button>
                </Link>
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                >
                  <Button size="sm" variant="outline">
                    Live
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
