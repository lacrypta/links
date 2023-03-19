interface IPaperProps {
  children?: React.ReactNode;
}

const Paper = ({ children }: IPaperProps) => {
  return (
    <div
      className='bg-white shadow-2xl ring-1 ring-gray-900/5
      relative pt-[100px] z-20'
    >
      <div className='mx-auto'>{children}</div>
    </div>
  );
};
export default Paper;
