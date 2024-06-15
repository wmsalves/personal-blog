import { getArticleData } from "@/src/lib/articles";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const articleData = await getArticleData(params.slug);

  return (
    <section>
      <article dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
    </section>
  );
}
