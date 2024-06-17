import { getArticles } from "@/src/lib/articles";

import Link from "next/link";

interface Props {
  articles: any;
}

const ArticleList = ({ articles }: Props) => {
  "use client";
  return (
    <div className="flex flex-col gap-6 w-full">
      {articles.map((article: any) => (
        <Link
          className="flex items-center border-b border-black last:border-0 justify-between w-full"
          key={article.id}
          href={`/${article.id}`}
        >
          {article.title} {article.date}
        </Link>
      ))}
    </div>
  );
};

export default async function ArticlesPage() {
  const articles = getArticles();

  return (
    <div>
      <h1 className="my-12 font-bold">Articles</h1>
      <section>
        <ArticleList articles={articles} />
    
      </section>
    </div>
  );
}
