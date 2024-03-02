"use cleint";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";

function StaggerText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef(null);
  const textArray = text.split("");

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1 * i,
      },
    }),
  };
  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.p
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
    >
      {textArray.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter}
        </motion.span>
      ))}
    </motion.p>
  );
}

export default StaggerText;
