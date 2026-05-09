import Image from "next/image";
import Button from "./Button";

interface PartnerCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

const PartnerCTA = ({
  title = "Are You Building the Future of AI in Africa?",
  description = "Join our network of partners shaping responsible, ethical, and inclusive AI adoption across the continent. Let's build the future together.",
  buttonText = "Become a Partner",
  buttonHref = "mailto:partnerships@ailagos.org",
}: PartnerCTAProps) => {
  return (
    <section className="py-12 md:py-19.5 bg-neutral-100 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative stars */}
          <div className="absolute top-10 left-10 hidden md:block">
            <Image
              src="/images/stars.svg"
              alt="Stars"
              width={40}
              height={40}
              className="opacity-50"
            />
          </div>
          <div className="absolute bottom-10 right-10 hidden md:block">
            <Image
              src="/images/stars.svg"
              alt="Stars"
              width={40}
              height={40}
              className="opacity-50"
            />
          </div>

          <h2 className="text-2xl md:text-[40px] font-semibold md:leading-[50px] mb-6">
            {title}
          </h2>
          <p className="text-base md:text-lg text-black/80 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <Button href={buttonHref} variant="primary" className="mx-auto">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
