interface IPaperProps {
  children?: React.ReactNode;
}

const Paper = ({ children }: IPaperProps) => {
  return (
    <div
      className='relative bg-white pt-[100px] shadow-2xl ring-1 ring-gray-900/5 rounded-lg
      sm:w-[800px] sm:mx-auto sm:max-w-lg'
    >
      <div className='mx-auto'>{children}</div>
    </div>
  );
};
export default Paper;
