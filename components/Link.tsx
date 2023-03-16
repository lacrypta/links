import { IconType } from "react-icons";

import { Block, BlockType, Icon } from "../types/block";

// Icons
import { GrInstagram } from "react-icons/gr";
import { SiDiscord } from "react-icons/si";
import {
  BsTelegram,
  BsTwitter,
  BsGithub,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs";
import { AiOutlineLink, AiFillLinkedin } from "react-icons/ai";
import { IoMdHand } from "react-icons/io";

import TagManager from "react-gtm-module";

const socialIcon: { [key in Icon]: IconType } = {
  whatsapp: BsWhatsapp,
  instagram: GrInstagram,
  discord: SiDiscord,
  voluntary: IoMdHand,
  github: BsGithub,
  telegram: BsTelegram,
  twitter: BsTwitter,
  url: AiOutlineLink,
  linkedin: AiFillLinkedin,
  youtube: BsYoutube,
};

interface ILinkProps {
  data: Block;
}

const Link = ({ data }: ILinkProps) => {
  data.type = data.type ? data.type : "link"; // Default

  const { title, type, icon, url } = data;

  const Icon = socialIcon[icon];

  function handleClick() {
    TagManager.dataLayer({
      dataLayer: {
        event: "link",
        type,
        url,
      },
    });
  }

  return (
    <li>
      <a
        href={url}
        target='_blank'
        rel='noreferrer'
        onClick={handleClick}
        className='flex font-share items-center justify-center bg-white
        ring-2 ring-gray-900/5 rounded-md p-2
        transition duration-400 ease-out
        hover:bg-slate-50 hover:scale-[1.08]'
      >
        {" "}
        <Icon className='mr-1' />
        {title}
      </a>
    </li>
  );
};

export default Link;
