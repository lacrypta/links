declare global {
  interface Window {
    webln: any;
  }
}

import Image from "next/image";
import { useEffect } from "react";

import menuSVG from "../../public/images/menu.svg";

interface RoundButtonProps {
  className?: string;
}

export const RoundButton = ({ className }: RoundButtonProps) => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
  }, []);

  const connect = async () => {
    try {
      if (!window.webln.enabled) {
        await window.webln.enable();
      }

      const res = await window.webln.lnurl("YOUR_LN_URL");
      console.dir(res);
    } catch (err: any) {
      // Tell the user what went wrong
      console.dir(err);
      alert(err.message);
    }
  };

  return (
    <div className={className}>
      <button
        onClick={connect}
        className='rounded-full w-10 h-10 bg-white/10 flex justify-center items-center hover:bg-white/25 transition-colors duration-150 active:bg-black/5'
      >
        <Image className='w-6 h-6' src={menuSVG} alt='' />
      </button>
    </div>
  );
};

export default RoundButton;
