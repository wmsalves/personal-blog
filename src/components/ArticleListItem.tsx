"use client";

import Link from "next/link";

interface Props {
  articles: any;
}

const ArticleItemList = ({ articles }: Props) => {
  console.log(articles);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        {articles.map((article) => (<p>{article.title}</p>))}
      </div>
    </div>
  );
};

export default ArticleItemList;
