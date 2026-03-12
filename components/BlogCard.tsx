import Image from 'next/image';

interface BlogCardProps {
  image: string;
  tag: string;
  date: string;
  title: string;
}

const BlogCard = ({ image, tag, date, title }: BlogCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative w-full h-[441px] rounded-[14px] overflow-hidden  bg-neutral-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className='px-5 pt-[26px] pb-[40px]'>
 <div className="flex items-center gap-[4px] text-[10.89px] leading-[14.73px] text-black mb-2  tracking-[0] *:inline-block">
        <span className='mr-[6px]'>{tag}</span>
        <span className="w-[4.8px] h-[4.8px] bg-black rounded-full"></span>
        <span>{date}</span>
      </div>
      <h3 className="max-w-[80%] md:text-[18.67px] font-semibold leading-[23.33px] group-hover:opacity-40 transition-colors line-clamp-2">
        {title}
      </h3>

      </div>
     
    </div>
  );
};

export default BlogCard;
