interface ButtonProps {
  onClick: () => void;
  prefix?: React.ReactElement;
  label: string;
}

export const Button = ({ label, prefix, onClick }: ButtonProps) => {
  return (
    <button
      type='button'
      className='my-4 inline-flex items-center space-x-1 justify-center rounded-md border border-transparent bg-blue-100 px-6 py-4 text-md font-medium text-blue-900/50 hover:bg-blue-200 active:bg-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
      onClick={onClick}
    >
      {prefix}
      <span>{label}</span>
    </button>
  );
};

export default Button;