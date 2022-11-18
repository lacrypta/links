interface IPaperProps {
  children: React.ReactNode;
}

const Paper = ({ children }: IPaperProps) => {
  return (
    <div className='relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
      <div className='mx-auto max-w-md'>{children}</div>
    </div>
  );
};

export default Paper;
