interface ILinksListProps {
  links?: any[];
}

const LinksList = ({ links }: ILinksListProps) => {
  return (
    <ul className='space-y-4'>
      <li className='flex items-center'>
        <svg
          className='h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle cx='12' cy='12' r='11' />
          <path d='m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9' fill='none' />
        </svg>
        <p className='ml-4'>
          Customizing your{" "}
          <code className='text-sm font-bold text-gray-900'>
            tailwind.config.js
          </code>{" "}
          file
        </p>
      </li>
    </ul>
  );
};

export default LinksList;
