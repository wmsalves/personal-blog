import { Article, getArticles } from "@/src/lib/articles";
import moment from "moment";
import Link from "next/link";

export default async function ArticlesPage() {
  const articles = getArticles();
  return (
    <div className="w-full">
      <h1 className="my-12 text-center text-4xl font-bold">Articles</h1>

      <section className="flex w-full flex-col divide-y divide-zinc-300 dark:divide-neutral-700">
        {articles.map((article: Article) => (
          <Link
            className="flex w-full flex-col justify-between px-2 py-4 hover:bg-zinc-200 sm:flex-row sm:items-center dark:hover:bg-zinc-800"
            key={article.id}
            href={`/articles/${article.id}`}
          >
            {article.title}{" "}
            <span className="text-zinc-500 dark:text-zinc-400">
              {moment(article.date, "YYYY-MM-DD").format("MMMM Do, YYYY")}
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
