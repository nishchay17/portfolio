"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/config/project";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useRef } from "react";

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
      <div className="overflow-hidden whitespace-nowrap px-2 mt-4 select-none">
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
      <div className={`"relative h-[calc(40vh*12)]`} ref={targetRef}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6">
            <div className="pr-40">
              <h2 className="text-7xl font-semibold mb-8">Projects</h2>
              <p className="text-xl opacity-80">A collection of projects</p>
            </div>
            {projects.map((project) => (
              <div
                key={project.id}
                className="w-[40vw] h-[70vh] border border-white/20 bg-zinc-950 rounded py-5 px-6"
              >
                <div className="flex items-start justify-between gap-4 flex-col md:flex-row">
                  <p className="text-3xl">{project.name}</p>
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
                <Image
                  src={`/img/${project.image}`}
                  alt={project.name}
                  width={800}
                  height={800}
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
