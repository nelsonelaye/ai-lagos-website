import Image from "next/image";
import Button from "./Button";
import { cn } from "@/utils/cn";

interface PartnerCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

const PartnerCTA = ({
  title,
  description,
  buttonText,
  buttonHref,
  className,
}: PartnerCTAProps) => {
  return (
    <section className={cn("mb-10 md:mb-[45px] bg-white", className)}>
      <div className="container mx-auto px-6">
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 lg:h-[386px]!  bg-accent-2 rounded-[20px] p-6 md:p-12 lg:px-[60px]  relative overflow-hidden">
          <div className="w-full max-w-4xl">
            <h2 className="text-2xl md:text-[34px] lg:text-[40px] font-semibold md:leading-[50px] mb-3 lg:mb-[18px]">
              {title}
            </h2>
            <p className="text-base md:text-xl lg:text-2xl text-[#0D0D0D] max-w-3xl md:leading-[30px]">
              {description}
            </p>
          </div>
          <Button
            href={buttonHref}
            variant="secondary"
            className="lg:mr-[52px] "
          >
            {buttonText}
          </Button>

          {/* Decorative stars */}
          <div className="w-[90%] h-full md:w-[250px] lg:w-[379px] lg:h-[368px] absolute -top-14 md:top-24 -right-18 md:left-10 block">
            <Image
              src="/images/spark-grey.svg"
              alt="Star"
              width={379}
              height={368}
              className="w-full h-full"
            />
          </div>
          <div className="w-[250px] h-full lg:w-[375px] lg:h-[368px] absolute bottom-10 top-[-85px] right-[25%] hidden md:block">
            <Image
              src="/images/spark-grey.svg"
              alt="Star"
              width={375}
              height={368}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
