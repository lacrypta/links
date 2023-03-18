import { motion } from "framer-motion";
import { Block as IBlock } from "../../types/block";
import Block from "../blocks/Block";

interface BlockListProps {
  blocks?: IBlock[];
}

const BlockList = ({ blocks }: BlockListProps) => {
  return (
    <motion.ul className='space-y-4 text-lg'>
      {blocks?.map((block, k) => (
        <Block data={block} key={k} />
      ))}
    </motion.ul>
  );
};

export default BlockList;
