import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiSpotify,
  SiTwitter,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface Link {
  description: string;
  url: string;
  Icon?: ReactNode;
}

const externalLinks = [
  {
    description: "LinkedIn",
    url: "https://linkedin.com/in/lukeberrypi",
    Icon: <SiLinkedin />,
  },
  {
    description: "GitHub",
    url: "https://github.com/LukeberryPi",
    Icon: <SiGithub />,
  },
  {
    description: "Youtube",
    url: "https://youtube.com/@LukeberryPi",
    Icon: <SiYoutube />,
  },
  {
    description: "X / Twitter",
    url: "https://twitter.com/LukeberryPi",
    Icon: <SiTwitter />,
  },
  {
    description: "Spotify",
    url: "https://open.spotify.com/artist/4ymHKBTThfeOL114lwCWPQ?si=Ci9I2yhCSY-BfEjtqZuFqQ",
    Icon: <SiSpotify />,
  },
  {
    description: "Instagram",
    url: "https://instagram.com/LukeberryPi",
    Icon: <SiInstagram />,
  },
] as Link[];

const ExternalLink = (link: Link) => {
  return (
    <a
      key={link.description}
      href={link.url}
      target="_blank"
      className="flex items-center justify-between ring-1 ring-zinc-900 p-4 hover:bg-zinc-200 transition-all"
    >
      <span className="flex items-center gap-4">
        {link.Icon} {link.description}
      </span>
      <ArrowUpRight className="size-5" />
    </a>
  );
};

const internalLinks = [
  {
    description: "Explore my projects",
    url: "/projects",
  },
  {
    description: "Read my articles",
    url: "/articles",
  },
  {
    description: "Get to know me",
    url: "/about",
  },
];

const InternalLink = (link: Link) => {
  return (
    <Link className="group flex items-center gap-2" href={link.url}>
      {link.description}
      <ArrowRight className="size-5 group-hover:translate-x-1 transition-all" />
    </Link>
  );
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      {externalLinks.map((link: Link) => (
        <ExternalLink
          key={link.description}
          description={link.description}
          url={link.url}
          Icon={link.Icon}
        />
      ))}
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-4">
          {internalLinks.map((link: Link) => (
            <InternalLink
              key={link.description}
              description={link.description}
              url={link.url}
            />
          ))}
        </div>
        <a
          href="/luke-berry-cv.pdf"
          download="Luke Berry CV"
          className="bg-zinc-900 p-4 text-zinc-100 flex items-center gap-4 hover:bg-zinc-700 transition-all active:translate-y-1"
        >
          Download my CV
          <Download className="size-5" />
        </a>
      </div>
      <footer className="py-4 mx-auto max-w-prose absolute flex items-center justify-between bottom-0 w-[65ch]">
        <a href="https://github.com/LukeberryPi/blog" target="_blank">
          Code
        </a>
        <span>&copy; LukeberryPi, {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
