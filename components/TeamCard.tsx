import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

interface TeamCardProps {
  image: string;
  name: string;
  role?: string;
  linkedin?: string;
}

const TeamCard = ({ image, name, role, linkedin }: TeamCardProps) => {
  return (
    <div className="bg-accent-2 p-2 lg:p-4.5 rounded-[20px] overflow-hidden group h-full flex flex-col">
      <div className="relative w-full h-[300px] lg:h-[457px] rounded-[20px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="object-cover w-full h-full object-top  hover:scale-110 transition-all duration-500"
        />
      </div>
      <div className="px-[11px] pt-[15px] pb-[27px] flex justify-between items-end">
        <div>
          <h3 className="text-xl lg:text-[32px] font-semibold lg:leading-[50px] text-black lg:mb-1">
            {name}
          </h3>
          {role && (
            <p className="text-lg lg:text-[24px] text-black lg:leading-[30px]">
              {role}
            </p>
          )}
        </div>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-black transition-colors mb-1"
          >
            <FaLinkedin className="cursor-pointer text-xl lg:text-[28px]" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
