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
    <header className="mx-auto mb-8 max-w-prose">
      <nav className="flex flex-col items-center justify-between max-sm:gap-6 sm:flex-row">
        <Link
          className="relative flex items-center no-underline max-sm:text-center"
          href="/"
        >
          <div
            data-is-home={isHome}
            className="absolute -left-12 flex size-5 h-full w-12 items-center px-2 data-[is-home=true]:hidden"
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
        <div className="flex items-center gap-6">
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
              className="absolute left-1/2 hidden size-[5px] rounded-full bg-emerald-600 data-[is-current-path=true]:block dark:bg-sky-500"
            />
          </Link>
          <Link className="relative" href="/articles">
            /articles
            <div
              data-is-current-path={path.startsWith("/articles")}
              className="absolute left-1/2 hidden size-[5px] rounded-full bg-emerald-600 data-[is-current-path=true]:block dark:bg-sky-500"
            />
          </Link>
          <Link className="relative" href="/about">
            /about
            <div
              data-is-current-path={path === "/about"}
              className="absolute left-1/2 hidden size-[5px] rounded-full bg-emerald-600 data-[is-current-path=true]:block dark:bg-sky-500"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
