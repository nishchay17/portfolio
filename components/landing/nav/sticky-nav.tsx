"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { NAV_ITEMS, useNav } from "@/context/nav-context";

function StickyNav() {
  const { handleCurrentNav, currentIdx } = useNav();

  return (
    <nav className="select-none z-50 fixed bottom-5 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-[2rem] border-[0.5px] border-white/20">
      <ul className="flex gap-2 justify-center items-center">
        {NAV_ITEMS.map((it, idx) => (
          <li
            key={it}
            onClick={() => {
              handleCurrentNav(it);
              document
                ?.querySelector(`#${it.toLocaleLowerCase()}`)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={cn(
              "relative transition cursor-pointer font-light px-3 py-1.5 text-sm",
              currentIdx != idx && "hover:text-slate-300"
            )}
          >
            {currentIdx === idx && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 36 }}
                transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
              />
            )}
            {it}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default StickyNav;
