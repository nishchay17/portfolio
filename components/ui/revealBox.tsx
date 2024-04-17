"use client";

import { Variants, motion } from "framer-motion";

function RevealBox({ children }: { children: React.ReactNode }) {
  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default RevealBox;
