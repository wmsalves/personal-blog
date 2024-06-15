import Link from "next/link";
import { getArticleData } from "@/lib/articles";

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleData(params.slug);

  return (
    <section>
      <article dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
    </section>
  );
};

export default Article;
