import Image from 'next/image';
import { IoArrowForwardSharp } from 'react-icons/io5';

interface NewsletterProps {
  title?: string;
  placeholder?: string;
}

const Newsletter = ({ 
  title = "Join AI Lagos to get updates, insights, and stories shaping responsible, inclusive AI in Africa.", 
  placeholder = "Enter your mail" 
}: NewsletterProps) => {
  return (
    <section className="container mx-auto mb-15">
      <div className="bg-primary rounded-[10px] px-6 md:px-12 pt-[68px] pb-[94px] flex flex-col items-center text-center relative">
        <h2 className="text-2xl md:text-[40px] font-semibold mb-8 max-w-4xl md:leading-[50px] md:mb-[55px]">
          {title}
        </h2>
        <form
          action="https://ailagos.substack.com/api/v1/free?nojs=true"
          method="post"
          target="_blank"
          className="bg-secondary w-full max-w-2xl relative h-[64px] flex items-center rounded-[1000px] border-[2px] border-black px-8"
        >
          <input
            type="email"
            name="email"
            required
            placeholder={placeholder}
            className="w-full h-full border-0 outline-none bg-transparent text-sm md:text-base leading-[20px] placeholder:text-black"
          />
          <button
            type="submit"
            className="absolute right-6 top-1/2 -translate-y-1/2 hover:scale-110 active:scale-95 transition-transform cursor-pointer border-none bg-transparent"
            aria-label="Subscribe"
          >
            <IoArrowForwardSharp size="37px" className="text-black" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
