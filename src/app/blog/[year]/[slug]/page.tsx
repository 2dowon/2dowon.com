import "@/styles/prose.css";

import { baseUrl } from "@/app/sitemap";
import Giscus from "@/components/Giscus";
import CustomMDX from "@/components/mdx/CustomMdx";
import { formatDate } from "@/utils/date.util";
import { getBlogPost, getBlogPosts } from "@/utils/mdx.utils";
import { notFound } from "next/navigation";

interface IBlogPostPageProps {
  params: { year: string; slug: string };
}

export function generateMetadata({ params }: IBlogPostPageProps) {
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

export default async function Blog({ params }: IBlogPostPageProps) {
  const { year, slug } = params;
  const post = getBlogPost({ slug, year });
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
        <h1 className="text-2xl font-extrabold title md:text-4xl">{title}</h1>

        <p className="text-md mt-[0.5rem] text-zinc-600 dark:text-gray-200 md:mt-[1rem] md:text-lg">
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
