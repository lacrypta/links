/* eslint-disable @next/next/no-img-element */
// import next/config
import Image from "next/image";

interface LogoProps {
  title: string;
  picture?: string;
}

const Logo = ({ title, picture }: LogoProps) => {
  return (
    <div
      className='absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]
        bg-white rounded-full ring-2 ring-gray-900/5
      shadow-lg overflow-hidden w-[140px] h-[140px]'
    >
      <img
        width='140'
        height='140'
        alt={title}
        src={picture ? picture : "/images/profile.png"}
      />
    </div>
  );
};

export default Logo;
