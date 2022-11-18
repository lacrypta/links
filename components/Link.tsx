import { ILink } from "../types/link";

interface ILinkProps {
  data: ILink;
}

const Link = ({ data }: ILinkProps) => {
  const { title, type, url } = data;
  return (
    <li>
      <a
        href={url}
        target='_blank'
        rel='noreferrer'
        className='flex font-share justify-center bg-white
        ring-2 ring-gray-900/5 rounded-md p-2
        transition duration-400 ease-out
       hover:bg-slate-50 hover:scale-x-[1.05] hover:scale-y-[1.20]'
      >
        {title}
      </a>
    </li>
  );
};

export default Link;
