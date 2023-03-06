import Image from "next/image";
import LogoSvg from "../public/Foto1x1.jpg";

const Logo = () => {
  return (
    <div
      className='absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] px-5 pt-4 pb-6
      bg-white rounded-full ring-2 ring-gray-900/5
      shadow-lg
    '
    >
      <Image width='100' height='100' alt='Doxxed' src={LogoSvg} />
    </div>
  );
};

export default Logo;
