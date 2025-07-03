import { Article, getAllTags, getArticles } from "@/src/lib/articles";
import moment from "moment";
import Link from "next/link";

export default async function ArticlesPage() {
  const articles = getArticles();
  return (
    <div className="w-full">
      <h1 className="my-12 text-center text-4xl font-bold">Articles</h1>

      {/* TODO: add tags filter (OR between all selections)
      <p>{JSON.stringify(getAllTags())}</p> */}

      <section className="flex w-full flex-col divide-y divide-zinc-400 border border-zinc-400 dark:divide-zinc-600 dark:border-zinc-600">
        {articles.map((article: Article) => (
          <Link
            className="flex w-full flex-col justify-between p-4 hover:bg-zinc-100 sm:flex-row sm:items-center dark:hover:bg-zinc-800"
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
