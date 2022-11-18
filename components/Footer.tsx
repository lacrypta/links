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
          className='text-gray-500 hover:text-gray-800'
        >
          Powered by La Crypta &rarr;
        </a>
      </p>
    </div>
  );
};

export default Footer;
