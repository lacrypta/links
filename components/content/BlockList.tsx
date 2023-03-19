import { motion } from "framer-motion";
import { Block as IBlock } from "../../types/block";
import Block from "../blocks/Block";

interface BlockListProps {
  blocks?: IBlock[];
}

const contentVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.4,
      staggerChildren: 0.05,
      ease: "linear",
      duration: 0.2,
    },
  },
};

const childrenVariants = {
  initial: { opacity: 0, maxHeight: "0px" },
  animate: {
    opacity: 0.5,
    maxHeight: "100px",
    transition: {
      // delay: 0.2,
      duration: 1,
    },
  },
};

const BlockList = ({ blocks }: BlockListProps) => {
  return (
    <motion.ul
      className='space-y-2 text-lg'
      initial='initial'
      animate='animate'
      variants={contentVariants}
    >
      {blocks?.map((block, k) => (
        <motion.div
          key={k}
          transition={{
            delay: 0.05 * k + 0.55,
            easings: "linear",
            duration: 0.5,
          }}
          animate={{ opacity: 1, maxHeight: "100px" }}
          className='overflow-hidden'
        >
          <Block data={block} />
        </motion.div>
      ))}
    </motion.ul>
  );
};

export default BlockList;
