import Image from 'next/image';
import Button from './Button';

interface CTASectionProps {
  title: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
  imageAlt: string;
  label?: string;
  reverse?: boolean;
}

const CTASection = ({
  title,
  buttonText,
  buttonHref,
  imageSrc,
  imageAlt,
  label,
  reverse = false,
}: CTASectionProps) => {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="w-full flex flex-col md:flex-row md:h-[585px] gap-5">
          <div
            className={`bg-primary rounded-[20px] p-6 md:p-12 min-h-[300px] w-full h-full flex flex-col justify-between md:flex-[0.8] relative overflow-hidden group ${reverse ? "md:order-2" : "md:order-1"}`}
          >
            {/* Sparkle background element */}
            <div className="absolute bottom-[14px] right-0 w-fit h-[70%]">
              <Image
                src="/images/spark-yellow.svg"
                alt="Sparkle"
                width={400}
                height={400}
                className="w-full h-full"
              />
            </div>
            <div className="z-10 mb-[80px]">
              {label && (
                <div className="relative flex items-center mb-4">
                  <div className="w-[45px] h-[45px] md:w-[65px] md:h-[65px] rounded-full bg-white " />
                  <span className="ml-[-30px] md:ml-[-46px] text-sm md:text-base font-semibold uppercase leading-[30px] text-black">
                    {label}
                  </span>
                </div>
              )}
              <h2 className="text-2xl md:text-[40px] font-semibold md:leading-[50px] mb-8">
                {title}
              </h2>
            </div>

            <Button
              href={buttonHref}
              variant="secondary"
              className="self-start relative z-10"
              target="_blank"
            >
              {buttonText}
            </Button>
          </div>

          <div
            className={`relative rounded-[20px] overflow-hidden w-full md:flex-1 h-full ${reverse ? "md:order-1" : "md:order-2"}`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={500}
              height={500}
              className="md:object-cover w-full! h-full!"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
