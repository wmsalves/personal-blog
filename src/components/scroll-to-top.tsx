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
      className="fixed bottom-8 right-8 z-10 bg-zinc-50 p-2 ring-1 ring-zinc-800 dark:bg-zinc-800 dark:ring-zinc-300"
    >
      <ArrowUp className="size-5" />
    </button>
  );
};
