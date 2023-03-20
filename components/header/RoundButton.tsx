import Image from "next/image";
import menuSVG from "../../public/images/menu.svg";

interface RoundButtonProps {
  className?: string;
}

export const RoundButton = ({ className }: RoundButtonProps) => {
  return (
    <div className={className}>
      <button className='rounded-full w-10 h-10 bg-white/10 flex justify-center items-center hover:bg-white/25 transition-colors duration-200 active:bg-black/5'>
        <Image className='w-6 h-6' src={menuSVG} alt='' />
      </button>
    </div>
  );
};

export default RoundButton;
