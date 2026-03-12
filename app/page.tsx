import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import Hero from "@/components/Hero";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";
import { communityLink } from "@/utils/constants";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <Hero
        backgroundImage="/images/hero-bg-1.png"
        title="Responsible & Representative AI for Africa"
        description="AI Lagos is building a community committed to responsible, ethical, and locally informed AI adoption across the continent."
      />

      {/* Vision & Stats Section */}
      <section className="py-18 bg-white relative overflow-hidden">
        {/* Decorative Sparkles */}
        <div className="absolute top-10 right-10 opacity-10">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 0C100 55.2285 144.772 100 200 100C144.772 100 100 144.772 100 200C100 144.772 55.2285 100 0 100C55.2285 100 100 55.2285 100 0Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-5">
          <svg
            width="400"
            height="400"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 0C100 55.2285 144.772 100 200 100C144.772 100 100 144.772 100 200C100 144.772 55.2285 100 0 100C55.2285 100 100 55.2285 100 0Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div>
            <h2 className="text-3xl md:text-[40px] font-semibold leading-[50px] mb-9 max-w-5xl">
              Our vision is to be a community of curious people who shape and
              showcase the use and impact of responsible, representative AI in
              Africa.
            </h2>
            <Button href={communityLink} className="mb-20 md:mb-32 w-fit">
              Join the Community
            </Button>
          </div>

          <div className="w-full justify-between flex items-end">
            <div className="flex-1 flex gap-12">
              <div className="flex flex-col gap-4 w-full max-w-[212px]">
                <h3 className="text-3xl font-semibold md:text-[48px] leading-[30px]">
                  02+
                </h3>
                <p className="text-[10px] md:text-sm text-black leading-[18px]">
                  <span className="font-semibold">Events Hosted Workshops</span>
                  <br /> and community conversations.
                </p>
              </div>
              <div className="flex flex-col gap-4 w-full max-w-[191px]">
                <h3 className="text-3xl font-semibold md:text-[48px] leading-[30px]">
                  100+
                </h3>
                <p className="text-[10px] md:text-sm text-black leading-[18px]">
                  <span className="font-semibold">
                    Speakers & Experts Engaged
                  </span>
                  <br /> Local and international voices.
                </p>
              </div>
              <div className="flex flex-col gap-4 w-full max-w-[212px]">
                <h3 className="text-3xl font-semibold md:text-[48px] leading-[30px]">
                  50+
                </h3>
                <p className="text-[10px] md:text-sm text-black leading-[18px]">
                  <span className="font-semibold">Community Members</span>
                  <br /> A growing network of curious minds.
                </p>
              </div>
            </div>

            <div className="relative flex-[0.8] w-full">
              <Image
                src="/images/ejiro.svg"
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
        imageSrc="/images/team.svg"
        imageAlt="AI Lagos Team"
      />

      {/* Blog & Resources Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12 md:mb-15">
            <h2 className="text-2xl md:text-[40px] font-semibold leading-[50px]">
              Blog & resources
            </h2>
            <Button href="/blog" variant="black" className=" px-[31px]!">
              View all Post
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <BlogCard
              image="/images/speaker.svg"
              tag="Tech"
              date="Mar 12, 2024"
              title="Key Steps for Understanding the Early Signs Your Parent Needs Assisted Living"
            />
            <BlogCard
              image="/images/speaker.svg"
              tag="Tech"
              date="Mar 12, 2024"
              title="Key Steps for Understanding the Early Signs Your Parent Needs Assisted Living"
            />
            <BlogCard
              image="/images/speaker.svg"
              tag="Tech"
              date="Mar 12, 2024"
              title="Key Steps for Understanding the Early Signs Your Parent Needs Assisted Living"
            />
          </div>
        </div>
      </section>

      <Newsletter />

      <Footer />
    </main>
  );
}
