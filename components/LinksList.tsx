import { ILink } from "../types/link";
import Link from "./Link";

interface ILinksListProps {
  links?: ILink[];
}

const LinksList = ({ links }: ILinksListProps) => {
  return (
    <ul className='space-y-4 text-lg'>
      {links?.map((link, k) => (
        <Link data={link} key={k} />
      ))}
    </ul>
  );
};

export default LinksList;
