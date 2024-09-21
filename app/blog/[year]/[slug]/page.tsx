import { CustomMDX } from "app/_components/mdx";
import { formatDate } from "app/_utils/date.util";
import { getBlogPosts } from "app/_utils/mdx.utils";
import { baseUrl } from "app/sitemap";
import { notFound } from "next/navigation";

export function generateMetadata({ params }) {
  const { year, slug } = params;

  let post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  let { title, date: publishedTime, summary: description } = post.metadata;
  let ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${year}/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
  };
}

export default async function Blog({ params }) {
  const { year, slug } = params;
  const post = getBlogPosts().find((post) => post.slug === slug);
  const { metadata, content } = post ?? {};
  const { title = "", date = "", summary } = metadata ?? {};

  if (!post) {
    notFound();
  }

  return (
    <section className="mb-[5rem]">
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
            url: `${baseUrl}/posts/${year}/${slug}`,
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
    </section>
  );
}
