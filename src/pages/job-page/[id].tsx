import AnimText from "@/components/AnimText";
import { useEffect } from "react";
import { useRouter } from "next/router";
import jobs from "@/data/jobs.json";
import JobType from "@/types/job";

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
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col items-start justify-center min-h-screen bg-riotred text-left p-16">
        <h1 className="text-8xl font-bold mb-4 text-foreground">
          <AnimText text={job.project.toUpperCase()} offset={0.2} />
        </h1>
        <h3 className="text-lg font-bold text-foreground">
          <AnimText text={job.location} offset={0.3} />
        </h3>
        <h3 className="text-lg mb-12 font-bold text-foreground">
          <AnimText text={`JOB ID: ${job.id}`} offset={0.3} />
        </h3>
        <p className="text-lg text-foreground">
          <AnimText
            text="Join our passionate team of innovators and engineers to help shape the future of gaming through cutting-edge technology, creative collaboration, and a relentless drive to deliver unforgettable experiences."
            offset={0.3}
          />
        </p>
      </div>

      {/* Placeholder Job Info Section */}
      <div className="bg-gray-100 text-gray-800 p-8 md:p-16 lg:p-24">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Responsibilities:</h2>
            <ul className="list-disc list-inside space-y-3 text-lg">
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

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Required Qualifications:
            </h2>
            <ul className="list-disc list-inside space-y-3 text-lg">
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

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Desired Qualifications:</h2>
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>
                Professional experience establishing art vision and strategy.
              </li>
              <li>Demonstrated experience managing art leads.</li>
              <li>Placeholder desired qualification item.</li>
              <li>Another placeholder desired qualification.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Our Perks</h2>
            <ul className="list-disc list-inside space-y-3 text-lg">
              <p>
                Riot focuses on work/life balance, shown by our open paid time
                off policy and other perks such as flexible work schedules. We
                offer medical, dental, and life insurance, parental leave for
                you, your spouse/domestic partner, and children, and a 401k with
                company match. Check out our benefits pages for more
                information. At Riot Games, we put players first. That mission
                drives every decision in our quest to create games and
                experiences that make it better to be a player. Whether you’re
                working directly on a new player-facing experience or you’re
                supporting the company as a whole, everyone at Riot is part of
                our mission. And just like in our games, we’re better when we
                work together. Our goal is to create collaborative teams where
                you are empowered to bring your unique perspective everyday. If
                that sounds like the kind of place you want to work, we’re
                looking forward to your application.
              </p>
              <li>
                Professional experience establishing art vision and strategy.
              </li>
              <li>Demonstrated experience managing art leads.</li>
              <li>Placeholder desired qualification item.</li>
              <li>Another placeholder desired qualification.</li>
            </ul>
          </section>
        </div>

        <div className="w-full flex items-center justify-center mt-22">
          <button className="rounded-4xl p-4 bg-riotred text-background w-1/4 overflow-hidden">
            / Apply
          </button>
        </div>
      </div>
    </>
  );
}
