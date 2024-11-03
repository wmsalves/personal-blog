"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  const isHome = path === "/";

  return (
    <header className="max-w-prose mx-auto mb-8">
      <nav className="flex items-center flex-col justify-between sm:flex-row max-sm:gap-6">
        <Link
          className="relative flex no-underline items-center max-sm:text-center"
          href="/"
        >
          <ChevronLeft
            data-is-home={isHome}
            className="absolute -left-9 size-5 data-[is-home=true]:hidden"
          />
          <div className="flex flex-col">
            <span className="font-bold">LukeberryPi</span>
            <span className="text-zinc-500">Software Developer</span>
          </div>
        </Link>
        <div className="items-center flex gap-6">
          <Link className="relative" href="/projects">
            /projects
            <div
              data-is-current-path={path === "/projects"}
              className="hidden data-[is-current-path=true]:block size-1 bg-emerald-600 absolute rounded-full left-1/2"
            />
          </Link>
          <Link className="relative" href="/articles">
            /articles
            <div
              data-is-current-path={path.startsWith("/articles")}
              className="hidden size-1 data-[is-current-path=true]:block bg-emerald-600 absolute rounded-full left-1/2"
            />
          </Link>
          <Link className="relative" href="/about">
            /about
            <div
              data-is-current-path={path === "/about"}
              className="hidden size-1 data-[is-current-path=true]:block bg-emerald-600 absolute rounded-full left-1/2"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
