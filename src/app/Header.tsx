"use client";

import { ChevronLeft, Moon, Sun, Triangle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function isThemeSetToDark() {
  if (window == undefined) return;

  return (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
}

export default function Header() {
  const path = usePathname();
  const isHome = path === "/";
  const [isDarkMode, setIsDarkMode] = useState(isThemeSetToDark());

  useEffect(() => {
    if (isThemeSetToDark()) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  return (
    <header className="mx-auto max-w-prose pb-8 pt-10">
      <nav className="flex items-center justify-between max-sm:flex-col max-sm:gap-6">
        <Link
          data-is-home={isHome}
          className="group relative -m-12 -my-2 -mr-4 flex items-center rounded py-2 pl-12 pr-4 no-underline ring-zinc-300 data-[is-home=true]:ring-0 max-sm:text-center hover:ring-1 dark:ring-sky-600"
          href="/"
        >
          <div className="absolute left-1 flex size-4 h-full w-12 items-center px-2 group-data-[is-home=true]:hidden">
            <ChevronLeft />
          </div>
          <div className="flex flex-col max-sm:items-center">
            Luke Berry
            <span className="text-zinc-500 dark:text-zinc-400">
              Software Engineer
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={() => toggleTheme()}
            className="group relative flex items-center"
          >
            {isDarkMode ? (
              <Moon className="size-5 transition-all sm:hover:-rotate-12 sm:hover:scale-110 fill-gray-700" />
            ) : (
              <Sun className="size-5 fill-yellow-300 transition-all sm:hover:rotate-45 sm:hover:scale-110" />
            )}
          </button>
          <Link
            className="group relative rounded px-2 py-px ring-zinc-300 sm:hover:ring-1 dark:ring-sky-600"
            href="/projects"
            data-is-current-path={path === "/projects"}
          >
            /projects
            <Triangle className="absolute left-1/2 mt-1 hidden size-2 fill-sky-500 text-zinc-800 group-data-[is-current-path=true]:block dark:fill-sky-600 dark:text-transparent" />
          </Link>
          <Link
            className="group relative rounded px-2 py-px ring-zinc-300 sm:hover:ring-1 dark:ring-sky-600"
            href="/articles"
            data-is-current-path={path.startsWith("/articles")}
          >
            /articles
            <Triangle className="absolute left-1/2 mt-1 hidden size-2 fill-sky-500 text-zinc-800 group-data-[is-current-path=true]:block dark:fill-sky-600 dark:text-transparent" />
          </Link>
          <Link
            className="group relative rounded px-2 py-px ring-zinc-300 sm:hover:ring-1 dark:ring-sky-600"
            href="/about"
            data-is-current-path={path === "/about"}
          >
            /about
            <Triangle className="absolute left-1/2 mt-1 hidden size-2 fill-sky-500 text-zinc-800 group-data-[is-current-path=true]:block dark:fill-sky-600 dark:text-transparent" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
