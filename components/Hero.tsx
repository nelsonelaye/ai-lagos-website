import Image from 'next/image';
import Button from './Button';
import { communityLink } from '@/utils/constants';

interface HeroProps {
  backgroundImage: string;
  title: string;
  description: string;
}

const Hero = ({ backgroundImage, title, description }: HeroProps) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />
      
      <div className="w-full relative z-10 mx-auto px-6 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-[70px] font-semibold mb-8 md:mb-[45px] w-full max-w-4xl leading-[40px] md:leading-[70px] tracking-0 text-primary">
          {title}
        </h1>
        <p className="text-lg md:text-3xl mb-[45px] max-w-2xl text-neutral-200 md:leading-[30px]">
          {description}
        </p>
        <Button href={communityLink}>
          Join the Community
        </Button>
      </div>
    </section>
  );
};

export default Hero;
