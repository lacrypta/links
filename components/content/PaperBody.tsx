interface IPaperBodyProps {
  children: React.ReactNode;
}

const PaperBody = ({ children }: IPaperBodyProps) => {
  return (
    <div className='space-y-6 py-8 text-base leading-7 text-gray-600'>
      {children}
    </div>
  );
};

export default PaperBody;
