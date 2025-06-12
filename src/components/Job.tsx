"use client";

import { useRef, MouseEvent, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/router";
import AnimText from "./AnimText";
import JobType from "@/types/job";

interface JobProps {
  project: JobType;
  index: number;
}

export default function Job({ project, index }: JobProps) {
  const bgControls = useAnimation();
  const titleControls = useAnimation();
  const locationControls = useAnimation();
  const linkRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: MouseEvent) => {
    if (!linkRef.current) return;
    const bounds = linkRef.current.getBoundingClientRect();
    const fromTop = e.clientY < bounds.top + bounds.height / 2;

    bgControls.set({ top: fromTop ? "-100%" : "100%" });
    bgControls.start({
      top: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    });

    // Move title right and location left
    titleControls.start({
      x: 10,
      transition: { duration: 0.3, ease: "easeOut" },
    });
    locationControls.start({
      x: -10,
      transition: { duration: 0.3, ease: "easeOut" },
    });
  };

  const bg = index % 2 === 0 ? "" : "#e2e1de";

  const handleMouseLeave = (e: MouseEvent) => {
    if (!linkRef.current) return;
    const bounds = linkRef.current.getBoundingClientRect();
    const toTop = e.clientY < bounds.top + bounds.height / 2;

    bgControls.start({
      top: toTop ? "-100%" : "100%",
      transition: { duration: 0.2, ease: "easeOut" },
    });

    // Reset positions
    titleControls.start({
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    });
    locationControls.start({
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    });
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () =>
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const router = useRouter();
  const handleClick = () => {
    if (!linkRef.current) return;
    const bounds = linkRef.current.getBoundingClientRect();

    document.body.style.pointerEvents = "none";
    linkRef.current.style.zIndex = "999999";

    bgControls.set({
      top: bounds.top,
      left: bounds.left,
      width: bounds.width,
      height: bounds.height,
      position: "fixed",
      zIndex: 10,
    });

    setIsExpanded(true);

    bgControls
      .start({
        top: 0,
        left: 0,
        width: viewport.width,
        height: viewport.height,
        transition: {
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        },
      })
      .then(() => {
        //go to the page called job-page
        router.push(`/job-page/${project.id}`, undefined, { scroll: false });
      });
  };

  return (
    <div className="relative w-full cursor-pointer overflow-hidden group">
      {/* Content Container */}
      <motion.div
        ref={linkRef}
        className="relative w-full cursor-pointer py-4 overflow-hidden"
        onMouseEnter={isExpanded ? undefined : handleMouseEnter}
        onMouseLeave={isExpanded ? undefined : handleMouseLeave}
        onClick={handleClick}
        style={{ backgroundColor: bg }}
      >
        {/* Animated Background Layer */}
        <motion.div
          className="bg-riotred z-0"
          initial={{
            top: "-100%",
            height: "100%",
            position: "absolute",
            width: "100%",
          }}
          animate={bgControls}
          style={{
            position: isExpanded ? "fixed" : "absolute",
            top: isExpanded ? 0 : undefined,
            left: isExpanded ? 0 : undefined,
            height: isExpanded ? "100vh" : "100%",
            width: isExpanded ? "100vw" : "100%",
          }}
        />

        {/* Content Grid - Mobile: 2 cols, Desktop: 6 cols */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-8 items-center relative z-10 px-2 md:px-24">
          {/* Project Name - Takes 3 columns */}
          <div className="col-span-2 md:col-span-3">
            <motion.div
              className="group-hover:text-black transition-colors duration-200 overflow-hidden "
              animate={titleControls}
            >
              <AnimText
                text={project.project}
                offset={0.1}
                extraClass="font-medium text-sm md:text-base font-semibold"
              />
            </motion.div>
          </div>

          {/* Category - Hidden on mobile, 1 column */}
          <div className="col-span-1 hidden md:block">
            <div
              className={`${
                isExpanded
                  ? "text-black"
                  : "text-gray-600 group-hover:text-black"
              } transition-colors duration-200 whitespace-nowrap overflow-hidden`}
            >
              <AnimText
                text={project.category}
                offset={0.15}
                extraClass="whitespace-nowrap"
              />
            </div>
          </div>

          {/* Client - Hidden on mobile, 1 column */}
          <div className="col-span-1 hidden md:block">
            <div
              className={`${
                isExpanded
                  ? "text-black"
                  : "text-gray-600 group-hover:text-black"
              } transition-colors duration-200 whitespace-nowrap overflow-hidden`}
            >
              <AnimText
                text={project.client}
                offset={0.2}
                extraClass="whitespace-nowrap"
              />
            </div>
          </div>

          {/* location - 1 column */}
          <div className="col-span-1 text-right">
            <motion.div
              className={`${
                isExpanded
                  ? "text-black"
                  : "text-gray-600 group-hover:text-black"
              } transition-colors duration-200 whitespace-nowrap overflow-hidden`}
              animate={locationControls}
            >
              <AnimText
                text={project.location}
                offset={0.25}
                extraClass="text-sm md:text-base"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
