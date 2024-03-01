"use client";

import { motion, useScroll, useTransform } from "framer-motion";

function Hero() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 5500]);

  return (
    <div className="overflow-hidden">
      <div className="relative w-screen">
        <motion.div
          style={{ translateY }}
          className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(135%_125%_at_50%_10%,#020817_40%,#63e_100%)]"
        />
        <motion.div style={{ scale, translateY }}>
          <div className="h-screen w-full flex justify-center items-center flex-col gap-8">
            <h1 className="text-hero font-semibold text-center leading-[105%]">
              Hello there <br /> I am{" "}
              <span className="bg-gradient-to-b from-white to-slate-300 text-transparent bg-clip-text">
                Nishchay
              </span>
            </h1>
            <p className="opacity-75 text-para text-center">
              A full stack developer, designing and developing web.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
