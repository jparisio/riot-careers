import jobs from "@/data/jobs.json";
import Job from "@/components/Job";
import AnimText from "@/components/AnimText";
import Lenis from "lenis";
import FilterBar from "@/components/FilterBar";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true,
    });

    // Listen for the scroll event and log the event data
    lenis.on("scroll", (e) => {
      console.log(e);
    });

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-bold mb-1 text-[#2b2a29]">
        <AnimText text={"Careers"} />
      </h1>
      <p className="text-lg mb-12 text-[#2b2a29]">
        <AnimText text="Open Positions: " offset={0.3} />
        <strong>
          <AnimText text="20" offset={0.3} />
        </strong>
      </p>
      <FilterBar />
      {/* <FilterBar /> */}
      {jobs.map((job, index) => (
        <Job key={job.id} project={job} index={index} />
      ))}
    </main>
  );
}
