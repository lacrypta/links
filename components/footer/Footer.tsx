import { BsGithub } from "react-icons/bs";

interface IFooterProps {
  children: React.ReactNode;
}

const Footer = ({ children }: IFooterProps) => {
  return (
    <div className='pt-4 text-xs text-center font-semibold leading-5'>
      {children}
      <p>
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
      </p>
    </div>
  );
};

export default Footer;
