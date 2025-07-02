import type { Metadata } from "next";
import { Karla } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ScrollToTop } from "../components/scroll-to-top";
import Script from "next/script";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Luke Berry",
  description: "Luke Berry's personal website.",
};

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// https://www.reddit.com/r/nextjs/comments/1bhfikg/comment/kxwj9ou/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
const Header = dynamic(() => import("./Header"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={`${karla.className} min-h-full px-6 py-10`}>
        <Script id="theme-toggle" strategy="afterInteractive">
          {`document.documentElement.classList.toggle("dark", localStorage.theme ===
        "dark" || (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches))`}
        </Script>
        <Header />
        <main className="mx-auto max-w-prose">
          {children}
          <ScrollToTop />
        </main>
        <footer className="mx-auto mt-12 flex max-w-prose justify-center gap-6 text-zinc-500 dark:text-zinc-400">
          <a href="https://github.com/LukeberryPi/blog" target="_blank">
            Code
          </a>
          <Link href="/rss.xml">RSS Feed</Link>
          <a href="https://x.com/LukeberryPi" target="_blank">
            Made by LukeberryPi
          </a>
        </footer>
      </body>
    </html>
  );
}
