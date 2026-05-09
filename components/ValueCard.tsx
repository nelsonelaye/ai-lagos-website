import Image from "next/image";

interface ValueCardProps {
  icon: string;
  title: string;
  text: string;
}

const ValueCard = ({ icon, title, text }: ValueCardProps) => {
  return (
    <div className="bg-neutral-100  min-h-[326px] p-6 lg:pb-9 rounded-[9.1px] flex flex-col">
      <div className="lg:w-[122px] lg:h-[122px] w-[90px] h-[90px] bg-white rounded-full flex items-center justify-center mb-15 p-5.5">
        <Image
          src={icon}
          alt={title}
          width={72}
          height={72}
          className="object-contain w-full h-full"
        />
      </div>
      <div>
        <h3 className="text-xl font-semibold md:leading-[25px] text-black mb-2 md:mb-3.5">
          {title}
        </h3>
        <p className="text-sm md:leading-[16px] text-black md:w-[80%]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;
