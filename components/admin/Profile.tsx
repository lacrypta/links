/* eslint-disable @next/next/no-img-element */
// import next/config
import { motion } from "framer-motion";

interface ProfileProps {
  title: string;
  picture?: string;
}

const Profile = ({ title, picture }: ProfileProps) => {
  return (
    <motion.div
      className='bg-white rounded-full ring-2 ring-gray-900/5
      shadow-lg overflow-hidden w-[36px] h-[36px]'
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
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

export default Profile;
