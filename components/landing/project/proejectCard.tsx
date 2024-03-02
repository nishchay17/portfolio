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
    <div className="h-full w-full flex items-end justify-center relative">
      <div
        className={
          "w-[98%] h-[98%] hover:size-full transition-all ease-in-out duration-500 rounded-xl" +
          " py-5 px-6 border-[0.5px] border-white/20 bg-transparent cursor-pointer relative"
        }
      >
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
        {[project.createdOn, ...(project.additionalTags ?? [])]?.map((tag) => (
          <Badge
            key={tag}
            className={cn(
              bagdeClass[tag as keyof typeof bagdeClass] ?? "bg-yellow-200",
              "flex-shrink-0 mt-2 mr-2"
            )}
          >
            {tag}
          </Badge>
        ))}
        <p className="text-para-sm mt-4 text-primary/80 line-clamp-3">
          {project.description}
        </p>
        <div className="absolute inset-0 size-full bg-zinc-950/10 backdrop-blur-xl -z-20" />
      </div>
      <Image
        className="absolute -z-10 bottom-0 group right-1/2 translate-x-1/2 w-[90%] max-w-[700px] max-h-[50%] rounded-t-xl object-cover object-top"
        src={`/img/${project.image}`}
        alt={project.name}
        quality={100}
        width={700}
        height={700}
      />
    </div>
  );
}

export default ProjectCard;
