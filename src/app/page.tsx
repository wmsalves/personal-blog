import ArticleItemList from "@/src/components/ArticleListItem";
import { getArticles } from "@/src/lib/articles";

export default function HomePage() {
  const articles = getArticles();

  return (
    <div>
      <h1>articles</h1>
      <section>
        <ArticleItemList articles={articles} />
      </section>
    </div>
  );
}
