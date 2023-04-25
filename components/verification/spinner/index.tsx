import { ImSpinner5 } from "react-icons/im";
import { motion } from "framer-motion";

interface SpinnerProps {
  className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => {
  const spinnerVariants = {
    rotate: {
      rotate: 360,
      transition: {
        duration: 1,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div initial='initial' animate='rotate' variants={spinnerVariants}>
      <ImSpinner5 className={className} />
    </motion.div>
  );
};

export default Spinner;
