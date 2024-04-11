"use client";

import { Variants, motion } from "framer-motion";

import StaggerText from "../ui/staggerText";
import { useNav } from "@/context/nav-context";
import { useIntersectionObserver } from "@/hooks/use-intersector";

function Footer() {
  const sections = [
    {
      name: "Home",
      describe: "Homepage of my portfolio.",
      href: "/",
    },
    {
      name: "Projects",
      describe:
        "Here's a curated section of my projects. Check it out the source code in github also!",
      href: "/",
    },
    {
      name: "Skills",
      describe: "Check out my skills and tech stack that I love to use.",
      href: "/",
    },
    {
      name: "Resume",
      describe: "See my work experience and projects curated in one place.",
      href: "/",
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_95%_15%,#6533ee75,transparent)]"></div>
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
      <div className="flex-1">
        <StaggerText
          text="Lets connect."
          className="text-heading font-medium w-[20vw] leading-[80%] mb-7 md:mb-16"
        />
        <p className="text-para-sm opacity-60 cursor-pointer">
          nishchay13971@gmail.com
        </p>
      </div>
      <div className="flex-[2_2_0%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-12 xl:gap-16">
        {sections.map((it) => (
          <a key={it.name} href={it.href}>
            <div>
              <h3 className="text-para mb-2">{it.name}</h3>
              <p className="text-para-sm text-gray-400">{it.describe}</p>
            </div>
          </a>
        ))}
      </div>
      <div ref={ref} />
    </footer>
  );
}

export default Footer;
