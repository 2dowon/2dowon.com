import "app/_styles/prose.css";

import Giscus from "app/_components/Giscus";
import CustomMDX from "app/_components/mdx/CustomMdx";
import { formatDate } from "app/_utils/date.util";
import { getTagSnippet } from "app/_utils/mdx.utils";
import { baseUrl } from "app/sitemap";
import { notFound } from "next/navigation";

interface ISnippetPageProps {
  params: { tag: string; slug: string };
}

export function generateMetadata({ params }: ISnippetPageProps) {
  const { tag, slug } = params;

  const snippet = getTagSnippet({ tag, slug });
  if (!snippet) {
    return;
  }

  let {
    title,
    date: publishedTime,
    summary: description = "",
  } = snippet.metadata;
  let ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/snippets/${tag}/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
  };
}

export default async function Snippet({ params }: ISnippetPageProps) {
  const { tag, slug } = params;
  const snippet = getTagSnippet({ tag, slug });
  const { metadata, content } = snippet ?? {};
  const { title = "", date = "", summary } = metadata ?? {};

  if (!snippet) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            datePublished: date,
            dateModified: date,
            description: summary,
            // image: image
            //   ? `${baseUrl}${image}`
            //   : `/og?title=${encodeURIComponent(title)}`,
            url: `${baseUrl}/snippets/${tag}/${slug}`,
            author: {
              "@type": "Person",
              name: "2dowon",
            },
          }),
        }}
      />

      <h1 className="text-2xl font-semibold tracking-tighter title">{title}</h1>

      <div className="flex items-center justify-between mt-2 mb-8 text-sm">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {formatDate(date)}
        </p>
      </div>

      <article className="prose">
        <CustomMDX source={content} />
      </article>

      <Giscus />
    </section>
  );
}
