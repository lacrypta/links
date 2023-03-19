import { motion } from "framer-motion";

interface IPaperProps {
  children?: React.ReactNode;
}

const Paper = ({ children }: IPaperProps) => {
  return (
    <motion.div
      className='bg-white shadow-2xl ring-1 ring-gray-900/5
      relative z-20'
      initial={{ paddingTop: "30px" }}
      animate={{ paddingTop: "100px" }}
      transition={{ delay: 0.4 }}
    >
      <div className='mx-auto'>{children}</div>
    </motion.div>
  );
};
export default Paper;
