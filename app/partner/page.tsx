import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import PartnerCTA from "@/components/PartnerCTA";
import ValueCard from "@/components/ValueCard";
import { partnerLink } from "@/utils/constants";
import Image from "next/image";

export default function Partner() {
  const benefits = [
    {
      icon: "/images/diversity.svg",
      title: "Access to the Right Community",
      text: "Connect with a growing network of AI enthusiasts, product builders, designers, developers, and founders across Africa.",
    },
    {
      icon: "/images/crown.svg",
      title: "Position Your Brand as a Leader",
      text: "Show your commitment to innovation and position your brand at the center of Africa’s AI conversation.",
    },
    {
      icon: "/images/stars.svg",
      title: "Create Real Impact",
      text: "Support initiatives that drive ethical, inclusive, and locally relevant AI development across the continent.",
    },
  ];

  const audience = [
    "AI practitioners and developers",
    "Designers and product builders",
    "Curious minds exploring AI across different industries",
    "Startup founders and operators",
    "Students and emerging tech talent",
    "Students and emerging tech talent",
  ];

  const partnershipOptions = [
    "Event sponsorship and co-hosting",
    "Community support and growth initiatives",
    "Content and media collaborations",
    "Research and thought leadership partnerships",
  ];

  return (
    <div>
      <Hero
        backgroundImage="/images/partener-hero.png"
        title="Help Shape Africa's AI Future"
        description="AI is moving fast globally. Africa cannot be left behind. At AI Lagos, we are building a community of thinkers, builders, and leaders driving responsible AI across the continent."
    buttonText="Become a Partner"
    buttonHref={partnerLink}
    />

      {/* Partner Audience Section */}
      <section className="py-10 md:py-16 bg-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          {/* Sparkles */}

          <div className="w-full mb-6 md:mb-9 lg:w-[80%]">
            <span className="lg:text-xl font-normal mb-4 lg:mb-6 block">
              Why Partner With AI Lagos
            </span>
            <h2 className="text-2xl md:text-[40px] font-semibold md:leading-[50px]">
              AI is transforming the world, but Africa is early. This is your
              chance to contribute, influence, and lead the future being shaped
              today right now.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <ValueCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                text={benefit.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partner Reach Pills Section */}
      <section className="mb-10 md:mb-14 bg-white">
        <div className="container mx-auto px-6">
          <div className="w-full mb-6 md:mb-12 lg:max-w-4xl">
            <span className="lg:text-xl font-normal mb-4 lg:mb-6 block">
              Who You’ll Be Reaching
            </span>
            <h2 className="text-2xl md:text-[40px] font-semibold md:leading-[50px]">
              By partnering with AI Lagos, you gain access to a fast-growing and
              highly engaged audience:
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-x-6 md:gap-y-7 mb-9 md:mb-[61px] max-w-7xl">
            {audience?.map((item, index) => (
              <div
                key={item + index}
                className="px-6 py-3 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #FFE202 0%, #FFA601 100%)",
                }}
              >
                <span className="text-black font-semibold text-base md:text-lg">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="w-full relative flex flex-col md:flex-row gap-8 md:gap-0">
            {[
              "/images/partner-audience-1.png",
              "/images/partner-audience-2.png",
            ].map((image, index) => (
              <div key={index} className="flex-1 relative">
                <div className="bg-neutral-100 rounded-[20px] overflow-hidden h-[400px] md:h-[574px]">
                  <Image
                    src={image}
                    alt="Partner Audience 1"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}

            {/* <div className="flex-1 relative">
              <div className="bg-neutral-100 rounded-[20px] overflow-hidden h-[400px] md:h-[500px]">
                <Image
                  src="/images/partner-audience-2.png"
                  alt="Partner Audience 2"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="mb-10 md:mb-[45px] bg-white">
        <div className="container mx-auto px-6">
          <div className="w-full mb-6 md:mb-9 lg:w-[80%]">
            <span className="lg:text-xl font-normal mb-4 lg:mb-6 block">
              Ways We Can Work Together
            </span>
            <h2 className="text-2xl md:text-[40px] font-semibold md:leading-[50px]">
              We believe partnerships should be flexible and meaningful. Here
              are a few ways we collaborate, we’re open to your ideas too.
            </h2>
          </div>

          <div className="bg-primary rounded-[20px] p-6 md:p-12 lg:py-[77px]  relative overflow-hidden">
            {/* Sparkle background element */}

            <div className="relative z-10 w-full">
              <ul className="space-y-2 md:space-y-3 lg:space-y-5">
                {partnershipOptions.map((option, index) => (
                  <li key={index} className="flex items-center leading-0">
                    <div className="w-6 h-6 md:w-[34px] md:h-[34px] bg-white shrink-0 rounded-full overflow-hidden mr-4 ">
                      <Image
                        src="/images/innovation-gold.svg"
                        alt="Star"
                        width={24}
                        height={24}
                        className="w-full h-full"
                      />
                    </div>

                    <span className=" text-black text-lg md:text-2xl lg:text-[40px] font-semibold">
                      {option}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-[60%] md:w-fit absolute bottom-[14px] md:top-6 right-3 md:right-10 h-[85%]">
              <Image
                src="/images/double-spark.svg"
                alt="Sparkle"
                width={400}
                height={400}
                className="w-full h-full 3xl:max-w-[448px]"
              />
            </div>
          </div>
        </div>
      </section>

      <PartnerCTA
        title="Partner with us "
        description="AI Lagos is powered by a community of builders, organizers, and curious minds. Through events, conversations, and collaborations, we are creating spaces for learning, connection, and innovation."
        buttonText="Become a Partner"

      />

      <Newsletter />
    </div>
  );
}
