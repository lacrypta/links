interface IContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return (
    <div className='relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12 px-6'>
      {children}
    </div>
  );
};

export default Container;