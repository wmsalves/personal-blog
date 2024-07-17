import { getArticleData } from "@/src/lib/articles";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const articleData = await getArticleData(params.slug);

  return (
    <section>
      <span className="flex flex-col my-12">
        <h1 className="font-bold">{articleData.title}</h1>
        <span className="text-zinc-700">{articleData.date}</span>
      </span>
      <article dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
    </section>
  );
}
