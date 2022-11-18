interface ITitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: ITitleProps) => {
  return (
    <div className='flex text-3xl justify-center font-baskerville'>
      <h1>{children}</h1>
    </div>
  );
};

export default Title;
