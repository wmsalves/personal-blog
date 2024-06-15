import {
  SiGithub,
  SiInstagram,
  SiTwitter,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { ExternalLinkIcon } from "lucide-react";
import { ReactNode } from "react";

interface Link {
  description: string;
  url: string;
  Icon: ReactNode;
  newTab: boolean;
}

const links = [
  {
    description: "Read my hot takes",
    url: "https://twitter.com/LukeberryPi",
    newTab: true,
    Icon: <SiTwitter />,
  },
  {
    description: "See my face",
    url: "https://instagram.com/LukeberryPi",
    newTab: true,
    Icon: <SiInstagram />,
  },
  {
    description: "Watch me talk",
    url: "https://youtube.com/LukeberryPi",
    newTab: true,
    Icon: <SiYoutube />,
  },
  {
    description: "Steal my code",
    url: "https://github.com/LukeberryPi",
    newTab: true,
    Icon: <SiGithub />,
  },
] as Link[];

export default function LinksPage() {
  return (
    <div className="flex flex-col gap-6">
      {links.map((link: Link) => (
        <a
          key={link.description}
          href={link.url}
          target={link.newTab ? "_blank" : "_self"}
          className="flex items-center justify-between ring-1 ring-black p-4"
        >
          <span className="flex items-center gap-4">
            {link.Icon} {link.description}
          </span>
          <ExternalLinkIcon className="size-5" />
        </a>
      ))}
    </div>
  );
}
