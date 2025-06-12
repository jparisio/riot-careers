import AnimText from "@/components/AnimText";
// import { useEffect } from "react";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-riotred">
      <h1 className="text-8xl font-bold mb-4 text-foreground">
        <AnimText text={"SOFTWARE ENGINEER"} offset={0.2} />
      </h1>
      <p className="text-lg mb-12 text-foreground">
        <AnimText
          text="Join our team and help shape the future of gaming."
          offset={0.3}
        />
      </p>
    </div>
  );
}
