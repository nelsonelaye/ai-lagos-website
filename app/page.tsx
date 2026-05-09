import BlogCard from "@/components/BlogCard";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";
import { communityLink, substackLink } from "@/utils/constants";
import PartnerCTA from "@/components/PartnerCTA";

export default function Home() {
  return (
    <div>
      <Hero
        backgroundImage="/images/hero-bg-1.png"
        title="Responsible & Representative AI for Africa"
        description="AI Lagos is building a community committed to responsible, ethical, and locally informed AI adoption across the continent."
        titleClassName="lg:max-w-4xl"
      />

      <section className="py-12 md:py-19.5 md:pb-34 bg-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          {/* Sparkeles */}

          <div className="hidden md:block absolute top-[-58px] right-16">
            <Image
              src="/images/spark-grey.svg"
              alt="Sparkle"
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>

          <div className="mb-15 md:mb-[6px]">
            <h2 className="text-2xl md:text-[40px] font-semibold md:leading-[50px] mb-9 max-w-5xl">
              Our vision is to be a community of curious people who shape and
              showcase the use and impact of responsible, representative AI in
              Africa.
            </h2>
            <Button href={communityLink} target="_blank">
              Join the Community
            </Button>
          </div>

          <div className="w-full relative justify-between flex gap-8 lg:gap-15 md:items-end flex-col md:flex-row ">
            {/* More Sparkeles */}
            <div className="absolute top-0 md:top-[80px] w-[560px] h-[600px] left-0 -translate-x-[60%] ">
              <Image
                src="/images/spark-grey.svg"
                alt="Sparkle"
                width={500}
                height={500}
                className="w-full h-full text-black"
              />
            </div>

            <div className="absolute top-[-28px] w-[170px] md:w-[317px] h-[170px] md:h-[311px] left-1/2 md:-translate-x-[80%]  ">
              <Image
                src="/images/spark-grey.svg"
                alt="Sparkle"
                width={500}
                height={500}
                className="w-full h-full text-black"
              />
            </div>

            <div className="flex-1 flex flex-col sm:flex-row items-center max-sm:text-center md:gap-6 lg:gap-12">
              <div className="flex flex-col gap-4 w-full max-w-[212px]">
                <h3 className="text-3xl font-semibold md:text-4xl lg:text-[48px] leading-[30px]">
                  03+
                </h3>
                <p className="text-sm text-black lg:leading-[18px]">
                  <span className="font-semibold">Events Hosted Workshops</span>
                  <br /> and community conversations.
                </p>
              </div>
              <div className="flex flex-col gap-4 w-full max-w-[191px]">
                <h3 className="text-3xl font-semibold md:text-4xl lg:text-[48px] leading-[30px]">
                  100+
                </h3>
                <p className="text-sm text-black lg:leading-[18px]">
                  <span className="font-semibold">
                    Speakers & Experts Engaged
                  </span>
                  <br /> Local and international voices.
                </p>
              </div>
              <div className="flex flex-col gap-4 w-full max-w-[212px]">
                <h3 className="text-3xl font-semibold md:text-4xl lg:text-[48px] leading-[30px]">
                  50+
                </h3>
                <p className="text-sm text-black lg:leading-[18px]">
                  <span className="font-semibold">Community Members</span>
                  <br /> A growing network of curious minds.
                </p>
              </div>
            </div>

            <div className="relative flex-[0.8] w-full bg-neutral-100">
              <Image
                src="/images/ejiro.png"
                alt="AI Lagos Speaker"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="AI is here. Will Africa shape it or follow others? Join AI Lagos to learn together, build responsibly, ask hard questions, and drive ethical, inclusive AI across Africa. Your voice matters."
        buttonText="Join the Community"
        buttonHref={communityLink}
        imageSrc="/images/team.png"
        imageAlt="AI Lagos Team"
        className="mb-8 md:mb-16"
      />

      <PartnerCTA
        title="Are You Building the Future of AI in Africa?"
        description="If you're a brand, organization, or team passionate about innovation, education, or community, we’d love to collaborate with you."
        buttonText="Become a Partner"
        buttonHref="mailto:info@ailagos.org?subject=AI Lagos Partnership&body=Hi AI Lagos team, I'm interested in partnering with you."
        className="md:mb-13!"
      />

      {/* Blog & Resources Section */}
      <section className="py-20.5 pb-11 bg-white hidden">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12 md:mb-15">
            <h2 className="text-2xl md:text-[40px] font-semibold leading-[50px]">
              Blog & resources
            </h2>
            <Button
              href={substackLink}
              target="_blank"
              variant="black"
              className=" px-[31px]!"
            >
              View all Post
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-3  md:gap-8">
            <BlogCard
              image="/images/speaker.png"
              tag="Tech"
              date="Mar 12, 2024"
              title="Key Steps for Understanding the Early Signs Your Parent Needs Assisted Living"
            />
            <BlogCard
              image="/images/speaker.png"
              tag="Tech"
              date="Mar 12, 2024"
              title="Key Steps for Understanding the Early Signs Your Parent Needs Assisted Living"
            />
            <BlogCard
              image="/images/speaker.png"
              tag="Tech"
              date="Mar 12, 2024"
              title="Key Steps for Understanding the Early Signs Your Parent Needs Assisted Living"
            />
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
