import { useEffect } from "react";
import { useRouter } from "next/router";
import jobs from "@/data/jobs.json";
import JobType from "@/types/job";
import AnimText from "@/components/AnimText";
import { useLenis } from "@/context/LenisProvider";

export async function getStaticPaths() {
  return {
    paths: jobs.map((job) => ({
      params: { id: job.id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const job = jobs.find((j) => j.id.toString() === params.id);
  return { props: { job } };
}

export default function Page({ job }: { job: JobType }) {
  const router = useRouter();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleRouteChangeStart = () => {
      lenis.scrollTo(0);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
    };
  }, [router.events, lenis]);

  return (
    <>
      {/* Responsive header */}
      <div className="flex flex-col items-start justify-center min-h-screen bg-riotred text-left p-4 sm:p-6 md:p-8 lg:p-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 text-foreground leading-tight">
          <AnimText text={job.project.toUpperCase()} offset={0.2} />
        </h1>
        <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground">
          <AnimText text={job.location.toUpperCase()} offset={0.3} />
        </h3>
        <h3 className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-12 font-bold text-foreground">
          <AnimText text={`JOB ID: REQ${job.id}`} offset={0.35} />
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-foreground max-w-full sm:max-w-2xl md:max-w-3xl">
          <AnimText
            text="Join our passionate team of innovators and engineers to help shape the future of gaming through cutting-edge technology, creative collaboration, and a relentless drive to deliver unforgettable experiences."
            offset={0.4}
          />
        </p>
      </div>

      {/* Responsive content section */}
      <div className="bg-gray-100 text-gray-800 p-4 sm:p-6 md:p-8 lg:p-16 xl:p-24">
        <div className="max-w-4xl mx-auto">
          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6">
              Responsibilities:
            </h2>
            <ul className="list-disc list-inside space-y-2 sm:space-y-2.5 md:space-y-3 text-sm sm:text-base md:text-lg">
              <li>
                Work with product and design leads to create and drive an art
                strategy that clearly supports Characters product and design
                goals.
              </li>
              <li>
                Lead, manage and mentor a high performing, healthy, and
                collaborative multi-discipline art team.
              </li>
              <li>
                Actively collaborate with Art Leadership across VALORANT to
                identify and execute on opportunities for cross-team
                collaboration and knowledge sharing.
              </li>
              <li>
                Effectively manage stakeholders, like the Creative Director and
                Product Art Director, to ensure Characters art direction clearly
                supports game level creative and art goals.
              </li>
              <li>
                Collaborate with partner teams, like Publishing, to unify
                character art expressions across media.
              </li>
              <li>
                Produce and maintain artifacts that inform, align, and empower
                teams to successfully create character art in the VALORANT
                style.
              </li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6">
              Required Qualifications:
            </h2>
            <ul className="list-disc list-inside space-y-2 sm:space-y-2.5 md:space-y-3 text-sm sm:text-base md:text-lg">
              <li>10+ years of industry experience.</li>
              <li>
                5+ years of professional experience leading character focused
                art teams in game development.
              </li>
              <li>
                Has shipped characters for at least 1 First Person Shooter.
              </li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6">
              Desired Qualifications:
            </h2>
            <ul className="list-disc list-inside space-y-2 sm:space-y-2.5 md:space-y-3 text-sm sm:text-base md:text-lg">
              <li>
                Professional experience establishing art vision and strategy.
              </li>
              <li>Demonstrated experience managing art leads.</li>
              <li>Experience with character pipeline optimization.</li>
              <li>Strong leadership and communication skills.</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6">
              Our Perks
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg">
              <p className="leading-relaxed">
                Riot focuses on work/life balance, shown by our open paid time
                off policy and other perks such as flexible work schedules. We
                offer medical, dental, and life insurance, parental leave for
                you, your spouse/domestic partner, and children, and a 401k with
                company match. Check out our benefits pages for more
                information. At Riot Games, we put players first. That mission
                drives every decision in our quest to create games and
                experiences that make it better to be a player. Whether you're
                working directly on a new player-facing experience or you're
                supporting the company as a whole, everyone at Riot is part of
                our mission. And just like in our games, we're better when we
                work together. Our goal is to create collaborative teams where
                you are empowered to bring your unique perspective everyday. If
                that sounds like the kind of place you want to work, we're
                looking forward to your application.
              </p>
            </div>
          </section>
        </div>

        {/* Responsive button section */}
        <div className="w-full flex items-center justify-center flex-col mt-12 sm:mt-16 md:mt-20 lg:mt-22">
          <button className="rounded-4xl py-4 px-6 sm:py-6 sm:px-8 bg-riotred text-background w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/4 overflow-hidden text-sm sm:text-base md:text-lg font-medium">
            / Apply
          </button>
          <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4 text-center px-4 max-w-md">
            (honestly dont bother applying unless u go to uwaterloo)
          </p>
        </div>
      </div>
    </>
  );
}
