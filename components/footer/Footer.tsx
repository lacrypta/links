import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

interface IFooterProps {
  children?: React.ReactNode;
}

const Footer = ({ children }: IFooterProps) => {
  return (
    <motion.div
      className='text-xs text-center font-semibold leading-5 bg-gray-100 rounded-b-lg overflow-hidden'
      initial={{ maxHeight: "0px", padding: "0px" }}
      animate={{ maxHeight: "100px", padding: "10px" }}
      transition={{
        delay: 0.8,
        duration: 0.4,
        easings: "linear",
      }}
    >
      {children}

      <div>
        <a
          href='https://github.com/lacrypta/links'
          target='_blank'
          rel='noreferrer'
          className='text-gray-500 hover:text-gray-800'
        >
          <span className='flex justify-center items-center'>
            <BsGithub className='mr-1' /> Powered by La Crypta &rarr;
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export default Footer;
