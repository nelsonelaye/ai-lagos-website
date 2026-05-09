// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import CTASection from "@/components/CTASection";
import { communityLink, volunteerLink } from "@/utils/constants";

export default function Join() {
  return (
    <div>
      <Hero
        backgroundImage="/images/hero-bg-3.png"
        title="Be Part of Africa's AI Movement"
        description="AI Lagos is building a responsible AI future for Africa — and we need you with us. Learn, engage, and shape the conversation as we explore, create, and act together."
        titleClassName="md:max-w-2xl! lg:max-w-[4xl]"
      />

      <section className="py-12 lg:py-19.5 lg:pb-15 bg-white">
        <div className="container mx-auto px-6">
          <div className="w-full lg:w-[75%]">
            <h2 className="text-2xl md:text-[40px] font-semibold md:leading-[50px]">
              We need passionate thinkers, builders, and doers to shape
              Africa&apos;s AI future—ethical, inclusive, locally informed. Join
              AI Lagos today.
            </h2>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-[13px]">
            {["member-1.png", "member-2.png", "member-3.png"].map((member) => (
              <div
                key={member}
                className="bg-neutral-100 rounded-[10px] w-full h-[350px] md:h-[480px] overflow-hidden"
              >
                <Image
                  src={`/images/${member}`}
                  alt="Join AI Lagos"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </div> */}
        </div>
      </section>

      <div className="pb-28 lg:pb-66 flex flex-col gap-10 md:gap-[51px]">
        <CTASection
          label="Join as a Community Member"
          title="Learn, connect, and shape Africa's AI conversation. Access events, discussions, and resources, meet like-minded individuals, share ideas, and grow your knowledge, network, and impact in AI."
          buttonText="Join the Community"
          buttonHref={communityLink}
          imageSrc="/images/team-1.png"
          imageAlt="Community Member"
        />

        <CTASection
          label="Join as a Volunteer"
          reverse={true}
          title="Help drive AI Lagos forward. Contribute your skills to events, content, and partnerships, amplify our impact, and shape an ethical, inclusive, and powerful AI future for Africa."
          buttonText="Join the Community"
          buttonHref={volunteerLink}
          imageSrc="/images/team-2.png"
          imageAlt="Volunteer"
        />
      </div>

      <Newsletter />
    </div>
  );
}
