"use client";

import { ChevronLeft, Moon, Sun } from "lucide-react";
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
    <header className="max-w-prose mx-auto mb-8">
      <nav className="flex items-center flex-col justify-between sm:flex-row max-sm:gap-6">
        <Link
          className="relative flex no-underline items-center max-sm:text-center"
          href="/"
        >
          <div
            data-is-home={isHome}
            className="w-12 h-full flex items-center absolute -left-12 px-2 size-5 data-[is-home=true]:hidden"
          >
            <ChevronLeft />
          </div>
          <div className="flex w-full flex-col">
            <span className="font-bold">Luke Berry</span>
            <span className="text-zinc-500 dark:text-zinc-400">
              Software Engineer
            </span>
          </div>
        </Link>
        <div className="items-center flex gap-6">
          <button
            onClick={() => toggleTheme()}
            className="group relative flex items-center"
          >
            {isDarkMode ? (
              <Moon className="size-5" />
            ) : (
              <Sun className="size-5" />
            )}
          </button>
          <Link className="relative" href="/projects">
            /projects
            <div
              data-is-current-path={path === "/projects"}
              className="hidden data-[is-current-path=true]:block size-[5px] bg-emerald-600 dark:bg-sky-500 absolute rounded-full left-1/2"
            />
          </Link>
          <Link className="relative" href="/articles">
            /articles
            <div
              data-is-current-path={path.startsWith("/articles")}
              className="hidden size-[5px] data-[is-current-path=true]:block bg-emerald-600 dark:bg-sky-500 absolute rounded-full left-1/2"
            />
          </Link>
          <Link className="relative" href="/about">
            /about
            <div
              data-is-current-path={path === "/about"}
              className="hidden size-[5px] data-[is-current-path=true]:block bg-emerald-600 dark:bg-sky-500 absolute rounded-full left-1/2"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
