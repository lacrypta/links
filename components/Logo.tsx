import Image from "next/image";
import config from "../data/config.json";

const Logo = () => {
  return (
    <div
      className='absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]
        bg-white rounded-full ring-2 ring-gray-900/5
      shadow-lg overflow-hidden w-[140px] h-[140px]'
    >
      <Image
        width='140'
        height='140'
        alt={config.main.title}
        src='/images/profile.png'
      />
    </div>
  );
};

export default Logo;
