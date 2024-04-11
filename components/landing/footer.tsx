"use client";

import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { Github, LinkedinIcon, TwitterIcon } from "lucide-react";

import StaggerText from "../ui/staggerText";
import { useNav } from "@/context/nav-context";
import { useIntersectionObserver } from "@/hooks/use-intersector";

function Footer() {
  const sections = [
    {
      name: "Home",
      describe: "Homepage of my portfolio.",
      href: "#home",
    },
    {
      name: "Projects",
      describe:
        "Here's a curated section of my projects. Check it out the source code in github also!",
      href: "#projects",
    },
    {
      name: "Skills",
      describe: "Check out my skills and tech stack that I love to use.",
      href: "#skills",
    },
    {
      name: "Resume",
      describe: "See my work experience and projects curated in one place.",
      href: "",
    },
  ];

  const path: Variants = {
    hidden: {
      pathLength: 0,
      strokeWidth: "2px",
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 4,
      },
    },
  };

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
  });
  const { handleCurrentNav } = useNav();
  if (isIntersecting) {
    handleCurrentNav("Contact");
  }

  return (
    <footer
      id="contact"
      className="container px-12 py-10 min-h-[95vh] border-t-[0.5px] border-white/20 flex items-start md:items-center relative overflow-hidden flex-col md:flex-row gap-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_95%_15%,#6533ee75,transparent)] -z-10"></div>
      <div className="absolute inset-0 stroke-slate-900 -z-10">
        <motion.svg
          width="675"
          height="1003"
          viewBox="0 0 675 1003"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={path}
            initial="hidden"
            whileInView="visible"
            d="M3.99962 1002C3.99962 1002 -48.0009 783 301 539.5C650 296 674 0.5 674 0.5"
          />
        </motion.svg>
      </div>
      <div className="flex flex-col flex-1 gap-6 md:gap-10">
        <StaggerText
          text="Lets connect."
          className="text-heading font-medium w-[20vw] leading-[80%] "
        />
        <div>
          <p className="opacity-60">Email at: </p>
          <Link href="mailto:nishchay13971@gmail.com">
            <p className="text-para-sm opacity-60 cursor-pointer">
              nishchay13971@gmail.com
            </p>
          </Link>
        </div>
        <div className="flex gap-4">
          <Link
            className="border border-indigo-800 hover:bg-indigo-700 transition-colors p-3 rounded-full"
            href="https://github.com/nishchay17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} />
          </Link>
          <Link
            className="border border-indigo-800 hover:bg-indigo-700 transition-colors p-3 rounded-full"
            href="https://www.linkedin.com/in/nishchay-trivedi-61219978"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon size={18} />
          </Link>
          <Link
            className="border border-indigo-800 hover:bg-indigo-700 transition-colors p-3 rounded-full"
            href="https://twitter.com/Nishchay17_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon size={18} />
          </Link>
        </div>
      </div>
      <div className="flex-[2_2_0%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-12 xl:gap-16">
        {sections.map((it) => (
          <div
            key={it.name}
            className="group cursor-pointer"
            onClick={() =>
              it.href &&
              document
                ?.querySelector(it.href)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <h3 className="relative text-para transition-colors group-hover:text-indigo-300 mb-2 after:bg-indigo-300 after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-500 duration-500">
              {it.name}
            </h3>
            <p className="text-para-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              {it.describe}
            </p>
          </div>
        ))}
      </div>
      <div ref={ref} />
    </footer>
  );
}

export default Footer;
