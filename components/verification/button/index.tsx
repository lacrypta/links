interface ButtonProps {
  onClick?: () => void;
  prefix?: React.ReactElement;
  type?: "submit" | "reset" | "button";
  label: string;
  disabled?: boolean;
}

export const Button = ({
  label,
  type = "button",
  prefix,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className='my-4 inline-flex items-center space-x-1 justify-center rounded-md border border-transparent bg-blue-100 px-6 py-4 text-md font-medium text-blue-900/50 hover:bg-blue-200 active:bg-blue-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
      onClick={onClick}
      disabled={disabled}
    >
      {prefix}
      <span>{label}</span>
    </button>
  );
};

export default Button;
