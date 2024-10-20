import { formatDate } from "app/_utils/date.util";
import { IBlogPost } from "app/_utils/interfaces/mdx.interface";
import Link from "next/link";

const BlogPostItem = ({ post }: { post: IBlogPost }) => {
  const { year, slug, metadata } = post;
  const { title, summary, date } = metadata;

  return (
    <Link key={slug} href={`/blog/${year}/${slug}`}>
      <div className="group flex flex-col gap-y-[1rem]">
        <div>
          <p className="text-base font-extrabold underline-offset-4 group-hover:underline md:text-lg">
            {title}
          </p>
          <p className="text:sm line-clamp-1 text-zinc-700 dark:text-zinc-100 md:text-base">
            {summary}
          </p>
        </div>
        <div>
          <p className="text-end text-sm text-zinc-600 dark:text-zinc-400">
            {formatDate(date, false)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostItem;
