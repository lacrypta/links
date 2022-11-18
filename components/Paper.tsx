interface IPaperProps {
  children: React.ReactNode;
}

const Paper = ({ children }: IPaperProps) => {
  return (
    <div
      className='bg-white pt-10 pb-8 shadow-2xl ring-1 ring-gray-900/5 rounded-lg px-10
      sm:w-[800px]
                  sm:mx-auto sm:max-w-lg sm:px-10'
    >
      <div className='mx-auto'>{children}</div>
    </div>
  );
};

export default Paper;
