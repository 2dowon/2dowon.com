import Giscus from "app/_components/Giscus";
import { CustomMDX } from "app/_components/mdx";
import { formatDate } from "app/_utils/date.util";
import { getBlogPosts } from "app/_utils/mdx.utils";
import { baseUrl } from "app/sitemap";
import { notFound } from "next/navigation";

export function generateMetadata({ params }) {
  const { year, slug } = params;

  const post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  const {
    title,
    date: publishedTime,
    summary: description,
    thumbnail,
  } = post.metadata;

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
          url: thumbnail,
        },
      ],
    },
  };
}

export const dynamic = "force-static";
export const revalidate = false;

export async function generateStaticParams() {
  const posts = getBlogPosts();

  const blogPostList: { year: string; slug: string }[] = [];
  for (const post of posts) {
    const { year, slug } = post;
    blogPostList.push({ year, slug });
  }

  return blogPostList;
}

export default async function Blog({ params }) {
  const { year, slug } = params;
  const post = getBlogPosts().find((post) => post.slug === slug);
  const { metadata, content } = post ?? {};
  const { title = "", date = "", summary, thumbnail } = metadata ?? {};

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
            image: thumbnail,
            url: `${baseUrl}/posts/${year}/${slug}`,
            author: {
              "@type": "Person",
              name: "2dowon",
            },
          }),
        }}
      />

      <div className="pb-[1rem] md:pb-[1.5rem]">
        <h1 className="title text-2xl font-extrabold md:text-4xl">{title}</h1>

        <p className="text-md mt-[0.5rem] text-zinc-600 dark:text-zinc-400 md:mt-[1rem] md:text-lg">
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
