import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <>
      <h1 className="my-12 text-center text-4xl font-bold">Projects</h1>
      <section className="space-y-16">
        <article>
          <div className="mt-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <h2 className="m-0">A minigame to learn TailwindCSS</h2>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-[#007ACC] px-2 py-px text-sm text-white ring-1 ring-zinc-800 dark:ring-0">
                TypeScript
              </div>
              <div className="rounded-full bg-[#38BDF9] px-2 py-px text-sm text-black ring-1 ring-zinc-800 dark:ring-0">
                TailwindCSS
              </div>
              <div className="rounded-full bg-black px-2 py-px text-sm text-white ring-1 ring-zinc-800 dark:bg-white dark:text-black dark:ring-0">
                Next.js
              </div>
            </div>
          </div>
          <a
            href="https://css2wind.com"
            target="_blank"
            className="group relative my-6 block overflow-hidden py-px"
          >
            <span className="absolute right-2 top-2 z-10 flex items-center gap-2 text-zinc-100 opacity-0 transition-all group-hover:opacity-100">
              Click to visit website <ArrowUpRight className="size-5" />
            </span>
            <Image
              className="size-full transition-all group-hover:scale-105"
              src="/projects/css2wind.png"
              width={9999}
              height={250}
              alt="Logo for the css2wind website"
            />
          </a>
          <p>
            A website to teach people what TailwindCSS is and isn&apos;t. The
            main feature is a minigame: there are eight CSS properties that you
            must translate to the equivalent TailwindCSS utility. It also
            has:{" "}
          </p>
          <ul>
            <li>
              <span className="font-bold">Resources:</span> a page that details
              the recommended tooling to maximize productivity and
              maintainability while using TailwindCSS. It mentions libraries
              such as{" "}
              <a
                href="https://tailwindcss.com/blog/automatic-class-sorting-with-prettier"
                target="_blank"
              >
                prettier-plugin-tailwindcss
              </a>{" "}
              and{" "}
              <a href="https://ui.shadcn.com/" target="_blank">
                shadcn/ui
              </a>
              .
            </li>
            <li>
              <span className="font-bold">Frequently Asked Questions:</span> a
              page that addresses common beginner questions about TailwindCSS.
              It also exposes misconceptions about the framework, such as
              recurring comparisons to Bootstrap.
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <a
              className="flex items-center gap-2"
              href="https://css2wind.com"
              target="_blank"
            >
              Visit website
              <ArrowUpRight className="size-5" />
            </a>
            <a
              className="flex items-center gap-2"
              href="https://github.com/LukeberryPi/css2wind"
              target="_blank"
            >
              View code
              <ArrowUpRight className="size-5" />
            </a>
          </div>
        </article>
        <article>
          <div className="mt-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <h2 className="m-0">An anti-procrastination to-do list</h2>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-[#00D8FE] px-2 py-px text-sm text-black ring-1 ring-zinc-800 dark:ring-0">
                React
              </span>
              <span className="rounded-full bg-[#38BDF9] px-2 py-px text-sm text-black ring-1 ring-zinc-800 dark:ring-0">
                TailwindCSS
              </span>
              <span className="rounded-full bg-gradient-to-r from-[#926AFE] to-[#49C7FF] px-2 py-px text-sm text-white ring-1 ring-zinc-800 dark:ring-0">
                Vite
              </span>
            </div>
          </div>
          <a
            href="https://phived.com"
            className="group relative my-6 block overflow-hidden ring-1 ring-zinc-800 text-zinc-800"
            target="_blank"
          >
            <span className="absolute right-2 top-2 z-10 flex items-center gap-2 opacity-0 transition-all group-hover:opacity-100">
              Click to visit website <ArrowUpRight className="size-5" />
            </span>
            <Image
              className="size-full transition-all group-hover:scale-105"
              src="/projects/phived.png"
              width={9999}
              height={250}
              alt="Logo for the phived website"
            />
          </a>
          <p>
            A website to help you stop procrastinating. It is a to-do list with
            one premise: you can&apos;t have more than five tasks at the same
            time. If you want to add more tasks, you have to complete one of the
            previous tasks. It is beautiful, efficient and privacy-first (no
            information is stored). It also has:
          </p>
          <ul>
            <li>
              <span className="font-bold">Daily tasks: </span>a page to list
              five things you want to do everyday. Everyday, you can restore
              these tasks to do them again. My five daily tasks are currently:
              do skin care, take creatine, work out, do a duolingo lesson, and
              solve 5 chess puzzles.
            </li>
            <li>
              <span className="font-bold">Progressive Web App (PWA): </span>
              download phived on any mobile device for free, so that you can
              access your tasks from any device.
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <a
              className="flex items-center gap-2"
              href="https://phived.com"
              target="_blank"
            >
              Visit website
              <ArrowUpRight className="size-5" />
            </a>
            <a
              className="flex items-center gap-2"
              href="https://github.com/LukeberryPi/phived"
              target="_blank"
            >
              View code
              <ArrowUpRight className="size-5" />
            </a>
          </div>
        </article>
      </section>
    </>
  );
}
