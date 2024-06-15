import type { Metadata } from "next";
import { Karla } from "next/font/google";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "LukeberryPi's Blog",
  description: "LukberryPi's Blog",
};

export const jetBrainsMono = Karla({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={`${jetBrainsMono.className} min-h-screen p-4`}>
        <header className="max-w-prose mx-auto mb-8">
          <nav className="flex items-center justify-between">
            <Link className="flex flex-col" href="/">
              <span className="font-bold">LukeberryPi</span>
              Software Engineer
            </Link>
            <div className="items-center flex gap-4">
              <Link href="/projects">Projects</Link>
              <Link href="/articles">Articles</Link>
              <Link href="/about">About</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-prose h-[calc(100vh-12rem)] relative">{children}</main>
        <div className="mx-auto max-w-prose relative">
          <footer className="bg-red-500 w-full p-4">
            <a href="https://github.com/LukeberryPi/blog" target="_blank">
              Code
            </a>
            <span className="flex items-center gap-2">
              LukeberryPi, {new Date().getFullYear()}
            </span>
          </footer>
        </div>
      </body>
    </html>
  );
}
