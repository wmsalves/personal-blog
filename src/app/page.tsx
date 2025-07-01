import {
  SiGithub,
  SiLinkedin,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const XLogo = () => {
  return (
    <svg viewBox="0 0 24 24" width="24">
      <g>
        <path
          className="fill-zinc-950 dark:fill-zinc-200"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        ></path>
      </g>
    </svg>
  );
};

const RaycastLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26}
      fill="none"
      viewBox="0 0 48 48"
    >
      <path
        className="fill-zinc-950 dark:fill-zinc-200"
        fillRule="evenodd"
        d="M12 30.99V36L-.01 23.99l2.516-2.499zM17.01 36H12l12.011 12.01 2.506-2.505zm28.487-9.497L48 24 24 0l-2.503 2.503L30.98 12h-5.732l-6.62-6.614-2.506 2.503 4.122 4.122h-2.869v18.625H36V27.77l4.122 4.122 2.503-2.506L36 22.747v-5.732zM13.253 10.747l-2.503 2.506 2.686 2.686 2.503-2.506zm21.314 21.314-2.495 2.503 2.686 2.686 2.506-2.503zM7.878 16.121l-2.503 2.504L12 25.253v-5.012zM27.756 36h-5.009l6.628 6.625 2.503-2.503z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

const BskyLogo = () => {
  return (
    <svg fill="none" viewBox="0 0 64 57" width="24">
      <path
        className="fill-zinc-950 dark:fill-zinc-200"
        d="M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805ZM50.127 3.805C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745Z"
      ></path>
    </svg>
  );
};

interface Link {
  description: string;
  url: string;
  icon?: ReactNode;
}

const externalLinks: Link[] = [
  {
    description: "LinkedIn",
    url: "https://linkedin.com/in/lukeberrypi",
    icon: <SiLinkedin />,
  },
  {
    description: "GitHub",
    url: "https://github.com/LukeberryPi",
    icon: <SiGithub />,
  },
  {
    description: "Get 10% OFF Raycast Pro",
    url: "https://www.raycast.com/pro?via=lukeberrypi",
    icon: <RaycastLogo />,
  },
  {
    description: "Youtube",
    url: "https://youtube.com/@LukeberryPi",
    icon: <SiYoutube />,
  },
  // {
  //   description: "Bluesky",
  //   url: "https://bsky.app/profile/lukeberrypi.com",
  //   icon: <BskyLogo />,
  // },
  {
    description: "X (formerly Twitter)",
    url: "https://x.com/LukeberryPi",
    icon: <XLogo />,
  },
];

const ExternalLink = (link: Link) => {
  return (
    <a
      key={link.description}
      href={link.url}
      target="_blank"
      className="flex items-center justify-between ring-1 ring-zinc-950 dark:ring-zinc-200 p-4 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all"
    >
      <span className="flex items-center gap-4">
        {link.icon} {link.description}
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
          icon={link.icon}
        />
      ))}
      <div className="flex justify-center sm:justify-between flex-col sm:flex-row max-sm:gap-8">
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
            className="bg-zinc-900 dark:bg-zinc-200 p-4 text-zinc-100 dark:text-zinc-900 flex flex-col sm:flex-row items-center gap-3 hover:bg-zinc-700 dark:hover:bg-zinc-400 transition-all"
          >
            <span className="text-nowrap">Download my CV</span>
            <Download className="size-5 max-sm:hidden" />
          </a>
          <span className="text-zinc-500 dark:text-zinc-400 max-sm:text-center">
            It&apos;s only one page.
          </span>
        </div>
      </div>
    </div>
  );
}
