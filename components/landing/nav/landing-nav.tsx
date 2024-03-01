"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";

import { Button } from "@/ui/button";

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (latest > prev && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };
  return (
    <nav className="fixed top-0 right-0 left-0 z-20">
      <motion.div
        variants={variants}
        initial={{ opacity: 0, y: -50 }}
        animate={hidden ? "hidden" : "visible"}
        transition={{
          ease: [0.1, 0.25, 0.3, 1],
          duration: 0.6,
        }}
        className="bg-[#020817_50%] backdrop-blur-sm"
      >
        <div className="flex justify-between items-center container py-4">
          <div className="flex gap-3 items-center">
            <Image src="/svg/logo.svg" alt="logo" width={14} height={14} />
            <h2 className="tracking-wider text-sm">Nishchay</h2>
          </div>
          <Link
            href={"https://www.linkedin.com/in/nishchay-trivedi-61219978"}
            target="_blank"
            rel="noopener noreferrer"
            prefetch={false}
          >
            <Button variant="outline" size="sm">
              <span className="w-3 h-3 relative mr-2">
                <span className="size-full absolute inset-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="size-full block rounded-full bg-green-400 animate-ping" />
                </span>
                <span className="size-[70%] rounded-full bg-green-500 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2" />
              </span>
              <p>Open to work</p>
            </Button>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
