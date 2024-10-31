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
            <span>Software Developer</span>
          </div>
        </Link>
        <div className="items-center flex gap-6">
          <Link href="/projects">/projects</Link>
          <Link href="/articles">/articles</Link>
          <Link href="/about">/about</Link>
        </div>
      </nav>
    </header>
  );
}
