import { GitBranch, Globe } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  url: string;
  technologies: ReactNode;
}

const projects: Project[] = [
{
  name: "Salgadin",
  description:
    "A web-based personal finance management SaaS with daily spending summaries, interactive charts, and expense categorization, built with ASP.NET Core and React.",
  url: "https://salgadin.vercel.app/",
  imageUrl: "/projects/Salgadin.png",
  githubUrl: "https://github.com/wmsalves/Salgadin",
  technologies: (
    <div className="flex items-center gap-x-3">
      <span className="rounded-full bg-[#61DAFB] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-zinc-200 ring-1 dark:ring-zinc-500 ring-zinc-600">
        React.js
      </span>
      <span className="rounded-full bg-[#68217A] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 ring-1 dark:ring-zinc-500 ring-zinc-600">
        ASP.NET Core
      </span>
      <span className="rounded-full bg-[#512BD4] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 ring-1 dark:ring-zinc-500 ring-zinc-600">
        Entity Framework Core
      </span>
      <span className="rounded-full bg-[#CC2927] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 ring-1 dark:ring-zinc-500 ring-zinc-600">
        SQL Server
      </span>
    </div>
  ),
},
{
  name: "Blog Node",
  description:
    "A simple blog application demonstrating CRUD (Create, Read, Update, Delete) operations using Node.js, Express, EJS, and MongoDB. It provides a basic setup for building a full-stack application with a MongoDB database, user authentication, and dynamic content rendering",
  url: "",
  imageUrl: "/projects/blogNode.png",
  githubUrl: "https://github.com/wmsalves/blog-node-mongo",
  technologies: (
    <div className="flex items-center gap-x-3">
      <span className="rounded-full bg-green-600 px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 ring-1 dark:ring-zinc-500 ring-zinc-600">
        Node.js
      </span>
      <span className="rounded-full bg-gray-700 px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 ring-1 dark:ring-zinc-500 ring-zinc-600">
        Express
      </span>
      <span className="rounded-full bg-yellow-500 px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-zinc-200 ring-1 dark:ring-zinc-500 ring-zinc-600">
        EJS
      </span>
      <span className="rounded-full bg-[#4DB33D] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 ring-1 dark:ring-zinc-500 ring-zinc-600">
        MongoDB
      </span>
    </div>
  ),
},
{
  name: "BeWear",
  description:
    "A modern web e-commerce app built with Next.js, React, Tailwind CSS, and PostgreSQL, featuring a shopping cart, Stripe checkout, and user authentication.",
  url: "https://bewear-wine.vercel.app/",
  imageUrl: "/projects/beWear.png",
  githubUrl: "https://github.com/wmsalves/bewear",
  technologies: (
    <div className="flex items-center gap-x-3">
      <span className="rounded-full bg-black px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 ring-1 dark:ring-zinc-500 ring-zinc-600">
        Next.js
      </span>
      <span className="rounded-full bg-[#00D8FE] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-zinc-200 ring-1 dark:ring-zinc-500 ring-zinc-600">
        React
      </span>
      <span className="rounded-full bg-[#38BDF9] px-2.5 py-0.5 text-sm text-zinc-950 dark:bg-inherit dark:text-zinc-200 ring-1 dark:ring-zinc-500 ring-zinc-600">
        TailwindCSS
      </span>
      <span className="rounded-full bg-[#336791] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 ring-1 dark:ring-zinc-500 ring-zinc-600">
        PostgreSQL
      </span>
      <span className="rounded-full bg-[#635BFF] px-2.5 py-0.5 text-sm text-zinc-100 dark:bg-inherit dark:text-zinc-200 ring-1 dark:ring-zinc-500 ring-zinc-600">
        Stripe
      </span>
    </div>
  ),
}
];

function ProjectCard({
  name,
  description,
  imageUrl,
  githubUrl,
  url,
  technologies,
}: Project) {
  return (
    <div className="flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 dark:zinc-500 dark:ring-zinc-500 ring-zinc-600">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div>
        <p className="p-4">{description}</p>
      </div>
      <Image
        src={imageUrl}
        width={1200}
        height={630}
        alt="Logo for css2wind website"
      />
      <div className="flex w-full justify-between divide-x divide-zinc-400 dark:divide-zinc-500">
        <a
          href={url}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
        >
          <Globe strokeWidth={1.4} className="size-5" /> Visit website
        </a>
        <a
          href={githubUrl}
          target="_blank"
          className="flex grow items-center justify-center gap-2 py-4 transition-transform sm:hover:bg-zinc-100 sm:dark:hover:bg-zinc-800"
        >
          <GitBranch strokeWidth={1.4} className="size-5" /> View code
        </a>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Projects
      </h1>
      <div className="space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.url} {...project} />
        ))}
      </div>
    </>
  );
}
