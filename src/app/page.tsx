import ArticleItemList from "@/src/components/ArticleListItem";
import { getArticles } from "@/src/lib/articles";

export default function HomePage() {
  const articles = getArticles();

  return (
    <div>
      <h1>minimal blog</h1>
      <section>
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <ArticleItemList articles={articles} key={article} />
          ))}
      </section>
    </div>
  );
}
