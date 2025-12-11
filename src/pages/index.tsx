import jobs from "@/data/jobs.json";
import Job from "@/components/Job";
import AnimText from "@/components/AnimText";
import FilterBar from "@/components/FilterBar";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLenis } from "@/context/LenisProvider";

export default function Home() {
  const lenis = useLenis();
  useEffect(() => {
    lenis?.start();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center md:p-24 sm:p-0.5 mt-28 sm:mt-28 md:mt-0 relative">
      <h1 className="text-6xl font-bold mb-1 text-[#2b2a29]">
        <AnimText text={"Careers"} offset={0.7} />
      </h1>
      <p className="text-lg mb-12 text-[#2b2a29]">
        <AnimText text="Open Positions: " offset={1} />
        <strong>
          <AnimText text="20" offset={1} />
        </strong>
      </p>
      <FilterBar />
      {/* <FilterBar /> */}
      {jobs.map((job, index) => (
        <Job key={job.id} project={job} index={index} />
      ))}
      {/* Intro animation overlay */}
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-riotred z-50"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        style={{ originY: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
      ></motion.div>
    </main>
  );
}
