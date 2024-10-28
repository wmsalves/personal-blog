import {
  SiGithub,
  SiLinkedin,
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

const externalLinks: Link[] = [
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
    url: "https://x.com/LukeberryPi",
    Icon: <SiTwitter />,
  },
];

const ExternalLink = (link: Link) => {
  return (
    <a
      key={link.description}
      href={link.url}
      target="_blank"
      className="flex items-center justify-between ring-1 ring-zinc-950 p-4 hover:bg-zinc-200 transition-all"
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
      <div className="flex justify-center sm:justify-between flex-col sm:flex-row items-center max-sm:gap-8">
        <div className="flex flex-col gap-4">
          {internalLinks.map((link: Link) => (
            <InternalLink
              key={link.description}
              description={link.description}
              url={link.url}
            />
          ))}
        </div>
        <div className="flex gap-2 flex-col">
          <a
            href="/luke-berry-cv.pdf"
            download="Luke-Berry-CV.pdf"
            className="bg-zinc-950 p-4 text-zinc-100 flex flex-col sm:flex-row items-center gap-4 hover:bg-zinc-700 transition-all active:tranzinc-y-1"
          >
            <span className="text-nowrap">Download my CV</span>
            <Download className="size-5 max-sm:hidden" />
          </a>
          <span className="text-zinc-500 max-sm:text-center">It&apos;s only one page.</span>
        </div>
      </div>
    </div>
  );
}
