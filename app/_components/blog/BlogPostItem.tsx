import { IBlogPost } from "app/_utils/interfaces/mdx.interface";
import { formatDate } from "app/_utils/mdx.utils";
import Link from "next/link";

const BlogPostItem = ({ post }: { post: IBlogPost }) => {
  const { year, slug, metadata } = post;
  const { title, summary, publishedAt } = metadata;

  return (
    <Link key={slug} href={`/blog/${year}/${slug}`}>
      <div className="flex flex-col gap-y-[1rem] group">
        <div>
          <p className="font-extrabold lg:text-lg text-md group-hover:underline underline-offset-4">
            {title}
          </p>
          <p className="text:sm lg:text-md line-clamp-1 ">{summary}</p>
        </div>
        <div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 text-end">
            {formatDate(publishedAt, false)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostItem;
