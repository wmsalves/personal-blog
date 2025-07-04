import { getArticleData } from "@/src/lib/articles";
import { Article } from "../../../components/article";

export function Tag({ tag }: { tag: string }) {
  return (
    <div className="flex size-4 w-fit items-center justify-center rounded-full border border-zinc-500 px-2 py-3 text-sm dark:border-zinc-400">
      #{tag}
    </div>
  );
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const articleData = await getArticleData(params.slug);

  return (
    <section>
      <div className="my-12 flex flex-col items-center justify-center gap-3">
        <span className="-mb-2 text-zinc-500 dark:text-zinc-400">
          Luke Berry on {articleData.date}
        </span>
        <h1 className="text-center text-4xl font-bold">{articleData.title}</h1>
        <div className="flex flex-wrap gap-x-2">
          {articleData.tags.map((tag: string) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
      </div>
      <Article html={articleData.contentHtml} />
    </section>
  );
}
