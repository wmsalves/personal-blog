import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { SiGithub, SiTwitter } from "@icons-pack/react-simple-icons";

export const metadata: Metadata = {
  title: "LukeberryPi's Blog",
  description: "LukberryPi's Blog",
};

export const jetBrainsMono = JetBrains_Mono({
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
      <body className={`${jetBrainsMono.className} min-h-full`}>
        <header className="max-w-prose mx-auto mb-8">
          <nav className="flex items-center justify-between">
            <Link className="flex flex-col" href="/">
              <span className="font-bold">LukeberryPi</span>
              Design Engineer
            </Link>
            <div className="items-center flex gap-2">
              <a
                href="https://github.com/LukeberryPi"
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub />
              </a>
              <a
                href="https://twitter.com/LukeberryPi"
                target="_blank"
                rel="noreferrer"
              >
                <SiTwitter />
              </a>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-prose">{children}</main>
      </body>
    </html>
  );
}
