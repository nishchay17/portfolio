import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { projects } from "@/config/project";
import { Badge } from "@/components/ui/badge";

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const bagdeClass = {
    "No longer supported": "bg-red-200",
    New: "bg-green-200",
  };
  return (
    <div
      className={
        "project-card size-full transition-all ease-in-out duration-500 rounded-xl py-5 px-6 pb-0 " +
        " cursor-pointer relative flex flex-col justify-between items-center gap-4" +
        " before:size-full before:absolute before:inset-0 before:rounded-xl before:z-[-1]" +
        " before:border-white/20 before:bg-black/40 before:border-[0.5px] hover:before:scale-[1.02] before:transition-all transform-bottom-center"
      }
    >
      <div className="w-full">
        <div className="flex md:items-center justify-between gap-2 md:gap-8 my-2 md:my-4 flex-col md:flex-row">
          <p className="text-subheading leading-[105%]">{project.name}</p>
          <div className="flex items-center gap-2 lg:gap-4">
            <Link href={project.github} target="_blank" rel="noreferrer">
              <Button
                className="px-0 group uppercase tracking-wider text-para-xm transition-all"
                variant="link"
                size="sm"
              >
                <span>github</span>
                <ArrowTopRightIcon className="ml-1 size-6 opacity-0 group-hover:opacity-100 transition-all" />
              </Button>
            </Link>
            <Link href={project.live} target="_blank" rel="noreferrer">
              <Button
                className="px-0 group uppercase tracking-wider text-para-xm transition-all"
                variant="link"
                size="sm"
              >
                <span>Visit</span>
                <ArrowTopRightIcon className="ml-1 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="mt-2 space-x-2">
          {[project.createdOn, ...(project.additionalTags ?? [])]?.map(
            (tag) => (
              <Badge
                key={tag}
                className={cn(
                  bagdeClass[tag as keyof typeof bagdeClass] ?? "bg-yellow-200",
                  "flex-shrink-0"
                )}
              >
                {tag}
              </Badge>
            )
          )}
        </div>
        <p className="text-para-sm mt-4 text-primary/80 line-clamp-3">
          {project.description}
        </p>
      </div>
      <div className="overflow-hidden w-[90%]">
        <Image
          className="rounded-t-xl object-contain object-top"
          src={`/img/${project.image}`}
          alt={project.name}
          quality={100}
          width={700}
          height={700}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
