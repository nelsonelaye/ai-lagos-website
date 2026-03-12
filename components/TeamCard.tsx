import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';

interface TeamCardProps {
  image: string;
  name: string;
  role?: string;
  linkedin?: string;
}

const TeamCard = ({ image, name, role, linkedin }: TeamCardProps) => {
  return (
    <div className="bg-[#F9F9F9] p-4 rounded-[20px] overflow-hidden group h-full flex flex-col">
      <div className="relative aspect-[16/11] w-full rounded-[15px] overflow-hidden mb-6">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <div className="px-2 pb-4 flex justify-between items-end mt-auto">
        <div>
          <h3 className="text-xl md:text-[24px] font-bold leading-[30px] text-black mb-1">
            {name}
          </h3>
          {role && (
            <p className="text-sm md:text-base text-black leading-[20px]">
              {role}
            </p>
          )}
        </div>
        {linkedin && (
          <a 
            href={linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#A2A2A2] hover:text-primary transition-colors mb-1"
          >
            <FaLinkedin size="24px" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
