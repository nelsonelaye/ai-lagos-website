// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import ValueCard from "@/components/ValueCard";
import TeamCard from "@/components/TeamCard";

export default function About() {
  const values = [
    {
      title: "Building Community",
      icon: "/images/community-gold.svg",
      text: "Build an inclusive, diverse, and sustainable AI Lagos community filled with committed builders, experts, and learners.",
    },
    {
      title: "Demystify AI",
      icon: "/images/education-gold.svg",
      text: "Demystify AI and emerging tech for the broad African audience, enabling informed decision-making and participation.",
    },
    {
      title: "Enabling Innovation",
      icon: "/images/innovation-gold.svg",
      text: "Enable and showcase local AI innovation through projects, hackathons, and interactive programs.",
    },
    {
      title: "Ethics & Policy",
      icon: "/images/advocacy-gold.svg",
      text: "Encourage ethical AI policies and promote best practices, leading to an extra-power AI story for the continent.",
    },
  ];

  const team = [
    {
      name: "Ejiro Esigbone",
      role: "Executive Director",
      image: "/images/ejiro-team.png",
      linkedin: "https://www.linkedin.com/in/ejiroesigbone/",
    },
    {
      name: "Ahunna Ogunedo",
      role: "Head, Partnerships & Fundraising",
      image: "/images/ahunna.png",
      linkedin: "https://www.linkedin.com/in/ahunna-ogunedo-567606a5",
    },

    {
      name: "Tito Oyefeso",
      role: "Head, Programs & Events",
      image: "/images/tito.png",
      linkedin: "https://www.linkedin.com/in/titooyefeso/",
    },
    {
      name: "Francis Odeyemi",
      role: "Head, Communications & Community",
      image: "/images/francis.png",
      linkedin: "https://www.linkedin.com/in/francisodeyemi/",
    },
  ];

  return (
<div>

      <Hero
        backgroundImage="/images/hero-bg-2.png"
        title="Shaping Africa's AI Future, Responsibly"
        description="AI Lagos exists to ensure Africa has a voice in every AI conversation, decision, and innovation. Through education, community, and dialogue, we promote responsible, ethical, and inclusive AI adoption across the continent."
      />

      <section className="py-12 md:py-19.5 bg-white">
        <div className="container mx-auto px-6 ">
          <div className="w-full md:w-[80%]">
            <h2 className="text-2xl md:text-[40px] font-semibold md:leading-12.5 mb-12.5">
              We are a community of curious minds dedicated to shaping and
              showcasing responsible, representative AI in Africa. Through
              education, open conversations, events, and hands-on engagement, we
              provide spaces for learning, questioning, building, and
              influencing AI—driving a movement that ensures technology serves
              everyone across the continent.
            </h2>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                text={value.text}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:pb-19.5 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-[40px] font-semibold md:leading-12.5 mb-12 md:mb-19.5 max-w-5xl">
            AI Lagos is powered by thinkers, builders, and organizers dedicated
            to responsibly shaping Africa&apos;s AI story.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {team.map((member, index) => (
              <TeamCard
                key={index}
                image={member.image}
                name={member.name}
                role={member.role}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />

    </div>
  );
}
