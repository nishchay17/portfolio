"use client";

import { useAnimate, motion } from "framer-motion";
import { useEffect } from "react";

export default function CustomCursor() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    function handlePointer(event: any) {
      animate(
        scope.current,
        {
          x: event.clientX - 8,
          y: event.clientY - 8,
        },
        {
          type: "tween",
          duration: 0.1,
          delay: 0,
        }
      );
    }

    window.addEventListener("pointermove", handlePointer);

    return () => {
      window.removeEventListener("pointermove", handlePointer);
    };
  }, []);

  return (
    <motion.div
      ref={scope}
      className={
        "fixed z-50 top-0 left-0 rounded-full pointer-events-none select-none" +
        " mix-blend-difference size-4 bg-yellow-300 hidden md:block print:hidden"
      }
    />
  );
}
