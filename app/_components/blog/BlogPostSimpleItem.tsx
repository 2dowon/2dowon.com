import { formatYYMMDD } from "app/_utils/date.util";
import { IBlogPost } from "app/_utils/interfaces/mdx.interface";
import Link from "next/link";

const BlogPostSimpleItem = ({ post }: { post: IBlogPost }) => {
  const { year, slug, metadata } = post;
  const { title, date } = metadata;

  return (
    <Link key={slug} href={`/blog/${year}/${slug}`}>
      <div className="flex items-center justify-between group text-zinc-600 dark:text-zinc-400">
        <p className="text-base break-all underline-offset-4 group-hover:underline">
          {title}
        </p>
        <p className="text-xs md:text-sm text-end ml-[0.5rem]">
          {formatYYMMDD(date)}
        </p>
      </div>
    </Link>
  );
};

export default BlogPostSimpleItem;
