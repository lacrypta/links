import { ILink } from "../types/link";

interface ILinkProps {
  data: ILink;
}

const Link = ({ data }: ILinkProps) => {
  return (
    <li>
      <a
        href={"#"}
        className='flex font-share justify-center bg-white border-solid border-2 border-slate-50 rounded-md p-2
        transition duration-300 ease-out
       hover:bg-slate-100 hover:scale-105'
      >
        Link
      </a>
    </li>
  );
};

export default Link;
