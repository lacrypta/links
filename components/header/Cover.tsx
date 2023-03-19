import { motion } from "framer-motion";

export const Cover = () => {
  return (
    <motion.div
      className='relative top-0 sm:w-[800px] sm:mx-auto sm:max-w-lg bg-gray-200 h-28 rounded-t-lg z-10'
      initial={{ translateY: "100%" }}
      animate={{ translateY: "10%" }}
      transition={{
        delay: 0.9,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    />
  );
};

export default Cover;
