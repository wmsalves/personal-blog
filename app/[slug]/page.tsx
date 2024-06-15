import Link from "next/link";
import { getArticleData } from "@/lib/articles";

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleData(params.slug);

  return (
    <section>
      <div className="flex justify-between">
        <Link href={"/"} className="flex flex-row gap-1">
          back to home
        </Link>
      </div>
      <article dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
    </section>
  );
};

export default Article;
