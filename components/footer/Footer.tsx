import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

interface IFooterProps {
  children?: React.ReactNode;
}

const Footer = ({ children }: IFooterProps) => {
  return (
    <motion.div
      className='relative text-xs text-center font-semibold leading-5 bg-gray-200 rounded-b-lg z-10 ring-1 ring-gray-900/5 shadow-2xl'
      initial={{ translateY: "-100%" }}
      animate={{ translateY: "0%" }}
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
          <span className='flex justify-center items-center p-2'>
            <BsGithub className='mr-1' /> Powered by La Crypta &rarr;
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export default Footer;
