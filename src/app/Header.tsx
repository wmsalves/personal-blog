"use client";

import { ChevronLeft, Contact2, Moon, Pin, Sun } from "lucide-react";
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
    <header className="mx-auto max-w-prose py-6">
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
          <div className="flex flex-col items-center sm:items-start">
            <span className="font-bold">Luke Berry</span>
            <span className="text-zinc-500 dark:text-zinc-400">
              Software Engineer
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-5">
          <button
            onClick={() => toggleTheme()}
            className="group relative flex items-center"
          >
            {isDarkMode ? (
              <Moon className="size-5" />
            ) : (
              <Sun className="size-5 fill-yellow-300" />
            )}
          </button>
          <Link className="relative" href="/projects">
            /projects
            <div
              data-is-current-path={path === "/projects"}
              className="absolute left-1/2 mt-1 hidden size-1.5 rounded-full bg-sky-500 ring-1 ring-zinc-800 data-[is-current-path=true]:block dark:bg-sky-600 dark:ring-0"
            />
          </Link>
          <Link className="relative" href="/articles">
            /articles
            <div
              data-is-current-path={path.startsWith("/articles")}
              className="absolute left-1/2 mt-1 hidden size-1.5 rounded-full bg-sky-500 ring-1 ring-zinc-800 data-[is-current-path=true]:block dark:bg-sky-600 dark:ring-0"
            />
          </Link>
          <Link className="relative" href="/about">
            /about
            <div
              data-is-current-path={path === "/about"}
              className="absolute left-1/2 mt-1 hidden size-1.5 rounded-full bg-sky-500 ring-1 ring-zinc-800 data-[is-current-path=true]:block dark:bg-sky-600 dark:ring-0"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
