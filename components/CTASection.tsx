import Image from 'next/image';
import Button from './Button';

interface CTASectionProps {
  title: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

const CTASection = ({
  title,
  buttonText,
  buttonHref,
  imageSrc,
  imageAlt,
  reverse = false,
}: CTASectionProps) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <div className="w-full flex flex-col md:flex-row md:h-[585px] gap-5">
          <div className={`bg-primary rounded-[20px] p-12 min-h-[300px] w-full h-full flex flex-col justify-between flex-[0.8] relative overflow-hidden group ${reverse ? 'md:order-2' : 'md:order-1'}`}>
            {/* Sparkle background element */}
            <div className="absolute bottom-[14px] right-0 w-fit h-[70%]">
              <Image
                src="/images/spark-yellow.svg"
                alt="Sparkle"
                width={400}
                height={400}
                className='w-full h-full'
              />
            </div>

     
              <h2 className="text-2xl md:text-[40px] font-semibold leading-[50px] mb-8 z-10">
                {title}
              </h2>
  
            <Button
              href={buttonHref}
              variant="secondary"
              className="self-start relative z-10"
            >
              {buttonText}
            </Button>
          </div>
          
          <div className={`relative rounded-[20px] overflow-hidden w-full flex-1 min-h-[300px] ${reverse ? 'md:order-1' : 'md:order-2'}`}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
