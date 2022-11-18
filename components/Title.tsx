interface ITitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: ITitleProps) => {
  return (
    <div className='flex justify-center font-baskerville'>
      <h1>{children}</h1>
    </div>
  );
};

export default Title;
