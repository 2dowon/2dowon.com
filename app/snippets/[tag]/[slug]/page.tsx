import { CustomMDX } from "app/_components/mdx";
import { formatDate, getTagSnippets } from "app/_utils/mdx.utils";
import { baseUrl } from "app/sitemap";
import { notFound } from "next/navigation";

// export function generateMetadata({ params }) {
//   let post = getBlogPosts().find((post) => post.slug === params.slug);
//   if (!post) {
//     return;
//   }

//   let {
//     title,
//     date: publishedTime,
//     summary: description,
//     image,
//   } = post.metadata;
//   let ogImage = image
//     ? image
//     : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       type: "article",
//       publishedTime,
//       url: `${baseUrl}/blog/${post.slug}`,
//       images: [
//         {
//           url: ogImage,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [ogImage],
//     },
//   };
// }

export default async function Snippet({ params }) {
  const { tag, slug } = params;
  const snippet = getTagSnippets(tag).find((snippet) => snippet.slug === slug);
  const { metadata, content } = snippet ?? {};
  const { title = "", date = "", summary, image } = metadata ?? {};

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
            image: image
              ? `${baseUrl}${image}`
              : `/og?title=${encodeURIComponent(title)}`,
            url: `${baseUrl}/snippets/${snippet.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
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