import Image from 'next/image';

interface ValueCardProps {
  icon: string;
  title: string;
  text: string;
}

const ValueCard = ({ icon, title, text }: ValueCardProps) => {
  return (
    <div className="bg-[#F9F9F9] p-8 rounded-[20px] flex flex-col h-full">
      <div className="w-[145px] h-[145px] bg-white rounded-full flex items-center justify-center mb-10">
        <div className="relative w-[77px] h-[77px]">
          <Image 
            src={icon} 
            alt={title} 
            fill 
            className="object-contain"
          />
        </div>
      </div>
      <div>
        <h3 className="text-2xl md:text-[32px] font-bold leading-[30px] text-black mb-4">
          {title}
        </h3>
        <p className="text-sm md:text-base leading-[22px] text-black/80">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;
