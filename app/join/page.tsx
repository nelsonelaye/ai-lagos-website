import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { communityLink } from "@/utils/constants";

export default function Join() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <Hero
        backgroundImage="/images/hero-bg-3.png"
        title="Be Part of Africa's AI Movement"
        description="AI Lagos is building a responsible AI future for Africa — and we need you with us. Learn, engage, and shape the conversation as we explore, create, and act together."
      />

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-[32px] font-semibold leading-[44px] mb-12">
              We need passionate thinkers, builders, and doers to shape Africa&apos;s AI future—ethical, inclusive, locally informed. Join AI Lagos today.
            </h2>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[400px]">
            <div className="bg-neutral-100 rounded-[20px] overflow-hidden">
               <Image src="/images/member-1.svg" alt="Join AI Lagos" width={500} height={400} className="w-full h-full object-cover grayscale" />
            </div>
            <div className="bg-neutral-100 rounded-[20px] overflow-hidden">
               <Image src="/images/member-2.svg" alt="Join AI Lagos" width={500} height={400} className="w-full h-full object-cover grayscale" />
            </div>
            <div className="bg-neutral-100 rounded-[20px] overflow-hidden">
               <Image src="/images/member-3.svg" alt="Join AI Lagos" width={500} height={400} className="w-full h-full object-cover grayscale" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Blocks */}
      <div className="pb-24 flex flex-col gap-12">
        <CTASection
          label="Join as a Community Member"
          title="Learn, connect, and shape Africa's AI conversation. Access events, discussions, and resources, meet like-minded individuals, share ideas, and grow your knowledge, network, and impact in AI."
          buttonText="Join the Community"
          buttonHref={communityLink}
          imageSrc="/images/hero-bg-1.png"
          imageAlt="Community Member"
        />

        <CTASection
          label="Join as a Volunteer"
          reverse={true}
          title="Help drive AI Lagos forward. Contribute your skills to events, content, and partnerships, amplify our impact, and shape an ethical, inclusive, and powerful AI future for Africa."
          buttonText="Join the Community"
          buttonHref={communityLink}
          imageSrc="/images/hero-bg-2.png"
          imageAlt="Volunteer"
        />
      </div>

      <Newsletter />
      <Footer />
    </main>
  );
}
