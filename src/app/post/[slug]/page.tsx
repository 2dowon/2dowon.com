import "@/styles/prose.css";

import Giscus from "@/components/Giscus";
import CustomMDX from "@/components/mdx/CustomMdx";
import { baseUrl } from "@/utils/const/url.const";
import { formatDate } from "@/utils/date.util";
import { getPost, getPosts } from "@/utils/mdx.utils";
import { notFound } from "next/navigation";

interface IPostPageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: IPostPageProps) {
  const { slug } = params;

  const post = getPosts().find((post) => post.slug === slug);
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
      url: `${baseUrl}/post/${slug}`,
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
  const posts = getPosts();

  const blogPostList: { slug: string }[] = [];
  for (const { slug } of posts) {
    blogPostList.push({ slug });
  }

  return blogPostList;
}

export default async function PostPage({ params }: IPostPageProps) {
  const { slug } = params;
  const post = getPost(slug);
  const { metadata, content } = post ?? {};
  const { title = "", date = "" } = metadata ?? {};

  if (!post) {
    notFound();
  }

  return (
    <section className="mx-[1rem] my-[3rem] pc:mx-auto pc:w-[50rem]">
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