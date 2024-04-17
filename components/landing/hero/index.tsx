"use client";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { isMobile } from "react-device-detect";

import { useNav } from "@/context/nav-context";
import { useIntersectionObserver } from "@/hooks/use-intersector";
import { useThrottle } from "@/hooks/useThrottle";
import { Particles } from "@/components/particles";

function Hero() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 7750]);
  const throttleY = useThrottle<MotionValue<number>>(translateY, 200);
  const throttleScale = useThrottle<MotionValue<number>>(scale, 200);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
    initialIsIntersecting: true,
  });
  const { handleCurrentNav } = useNav();
  if (isIntersecting) {
    handleCurrentNav("Home");
  }

  const heroContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const heroItem = {
    hidden: { opacity: 0, translateY: -50 },
    show: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="overflow-hidden" id="home" ref={ref}>
      <div className="relative w-screen">
        <motion.div
          style={isMobile ? {} : { translateY: throttleY }}
          className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(135%_125%_at_50%_10%,#020817_40%,#63e_100%)] will-change-transform"
        />
        <Particles className="absolute inset-0 -z-10" quantity={70} />
        <motion.div
          style={
            isMobile ? {} : { scale: throttleScale, translateY: throttleY }
          }
          className="will-change-transform"
        >
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            className="h-screen w-full flex justify-center items-center flex-col gap-8"
          >
            <motion.h1
              variants={heroItem}
              className="text-hero font-semibold text-center leading-[105%]"
            >
              Hello there <br /> I am{" "}
              <span className="bg-gradient-to-b from-white to-slate-300 text-transparent bg-clip-text">
                Nishchay
              </span>
            </motion.h1>
            <motion.p
              variants={heroItem}
              className="opacity-75 text-para text-center"
            >
              A full stack developer, designing and developing web.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
