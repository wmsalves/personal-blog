import ArticleItemList from "@/components/ArticleListItem";
import { getArticles } from "@/lib/articles";

const HomePage = () => {
  const articles = getArticles();

  return (
    <main>
      <h1>minimal blog</h1>
      <section>
        {articles !== null &&
          Object.keys(articles).map((article) => (
            <ArticleItemList
              category={article}
              articles={articles}
              key={article}
            />
          ))}
      </section>
    </main>
  );
};

export default HomePage;
