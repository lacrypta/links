interface IPaperProps {
  children: React.ReactNode;
}

const Paper = ({ children }: IPaperProps) => {
  return (
    <div className='relative bg-white pt-10 pb-8 shadow-2xl ring-1 ring-gray-900/5 w-screen mx-auto max-w-3xl rounded-lg px-10'>
      <div className='mx-auto'>{children}</div>
    </div>
  );
};

export default Paper;
