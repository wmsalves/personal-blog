"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0 })}
      className="fixed right-8 top-8 z-10 flex items-center gap-2 rounded py-2 pl-4 pr-3 ring-1 ring-zinc-400 hover:bg-zinc-100 dark:ring-zinc-500 hover:dark:bg-zinc-800"
    >
      Back to top
      <ArrowUp className="size-5" />
    </button>
  );
};
