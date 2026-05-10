import Image from "next/image";
import Button from "./Button";
import { communityLink } from "@/utils/constants";
import { cn } from "@/utils/cn";

interface HeroProps {
  backgroundImage: string;
  title: string | React.ReactNode;
  description: string;
  titleClassName?: string;
  buttonText?: string;
  buttonHref?: string;
}

const Hero = ({
  backgroundImage,
  title,
  description,
  titleClassName,
  buttonText,
  buttonHref

}: HeroProps) => {
  return (
    <section className="relative h-[80vh] sm:h-screen 3xl:max-h-[851px] w-full flex items-center justify-center overflow-hidden bg-black">
      <Image
        src={backgroundImage}
        alt="Hero Background"
        fill
        className="object-cover"
        priority
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* <div className="w-full relative z-10 mx-auto px-44 "> */}
      <div
        className={cn(
          "w-full relative z-10 mx-auto px-5 flex flex-col items-center text-center md:w-[70%] lg:max-w-4xl",
          titleClassName,
        )}
      >
        <h1
          className={cn(
            "text-4xl md:text-5xl lg:text-[70px] font-semibold mb-5 lg:mb-[45px] w-full  sm:leading-[40px] md:leading-[50px] lg:leading-[70px] tracking-0 text-primary",
          )}
        >
          {title}
        </h1>
        <p className="md:text-lg lg:text-[24px] mb-5 lg:mb-[45px] max-w-2xl text-neutral-200 md:leading-[30px]">
          {description}
        </p>
        <Button href={buttonHref ?? communityLink} target="_blank">
         {buttonText ?? "Join the Community"}
        </Button>
      </div>
    </section>
  );
};

export default Hero;
