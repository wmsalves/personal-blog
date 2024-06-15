import type { Metadata } from "next";
import { Cormorant_Garamond, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
        <header className="bg-red-500">
          <nav>
            <Link className="flex flex-col gap-2" href="/">
              <span className="font-bold">LukeberryPi</span>
              Software Engineer
            </Link>
          </nav>
        </header>
        <main className="max-w-prose mx-auto">{children}</main>
      </body>
    </html>
  );
}
