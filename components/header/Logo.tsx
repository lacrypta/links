/* eslint-disable @next/next/no-img-element */
// import next/config
import { motion } from "framer-motion";
import Image from "next/image";

interface LogoProps {
  title: string;
  picture?: string;
}

const Logo = ({ title, picture }: LogoProps) => {
  return (
    <motion.div
      className='absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]
        bg-white rounded-full ring-2 ring-gray-900/5
      shadow-lg overflow-hidden w-[140px] h-[140px]'
      initial={{ scale: 0, translateX: "-50%", translateY: "-50%" }}
      animate={{ scale: 1, translateX: "-50%", translateY: "-50%" }}
      transition={{
        delay: 0.6,
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.3,
      }}
    >
      <img
        width='140'
        height='140'
        alt={title}
        src={picture ? picture : "/images/profile.png"}
      />
    </motion.div>
  );
};

export default Logo;
