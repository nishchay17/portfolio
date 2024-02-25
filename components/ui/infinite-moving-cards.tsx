"use client";

import { useCallback, useEffect, useState, useRef } from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";

function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: { name: string; href: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const addAnimation = useCallback(
    function () {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
        const getDirection = () => {
          if (containerRef.current) {
            if (direction === "left") {
              containerRef.current.style.setProperty(
                "--animation-direction",
                "forwards"
              );
            } else {
              containerRef.current.style.setProperty(
                "--animation-direction",
                "reverse"
              );
            }
          }
        };
        const getSpeed = () => {
          if (containerRef.current) {
            if (speed === "fast") {
              containerRef.current.style.setProperty(
                "--animation-duration",
                "20s"
              );
            } else if (speed === "normal") {
              containerRef.current.style.setProperty(
                "--animation-duration",
                "40s"
              );
            } else {
              containerRef.current.style.setProperty(
                "--animation-duration",
                "80s"
              );
            }
          }
        };
        getDirection();
        getSpeed();
        setStart(true);
      }
    },
    [direction, speed]
  );

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <Link
            href={item.href}
            target="_blank"
            rel="noreferrer"
            key={item.name}
          >
            <li className="w-[350px] h-full max-w-full relative rounded-md border border-black/40 flex-shrink-0 px-8 py-6 md:w-[450px] bg-[#020817]">
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <p className="relative z-20 text-xl leading-[1.6]">
                  {item.name}
                </p>
              </blockquote>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default InfiniteMovingCards;
