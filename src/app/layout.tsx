import type { Metadata } from "next";
import { Karla } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ScrollToTop } from "../components/scroll-to-top";
import Header from "./Header";

export const metadata: Metadata = {
  title: "LukeberryPi's Blog",
  description: "LukberryPi's Blog",
};

const karla = Karla({
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
      <body className={`${karla.className} min-h-full px-6 py-10`}>
        <Header />
        <main className="mx-auto max-w-prose">
          {children}
          <ScrollToTop />
        </main>
        <footer className="max-w-prose mx-auto flex gap-6 justify-center mt-12">
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
