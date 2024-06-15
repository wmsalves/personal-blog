"use client";

import Link from "next/link";

interface Props {
  category: string;
  articles: any[];
}

const ArticleItemList = ({ category, articles }: Props) => {
  console.log(articles);

  return (
    <div className="flex flex-col">
      <h2>{category}</h2>
      <div className="flex flex-col">
        {articles.map((article, id) => (
          <Link href={`/${article.id}`} key={id}>
            {article.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticleItemList;
