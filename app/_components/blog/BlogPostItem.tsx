import { formatDate } from "app/_utils/date.util";
import { IBlogPost } from "app/_utils/interfaces/mdx.interface";
import Link from "next/link";

const BlogPostItem = ({ post }: { post: IBlogPost }) => {
  const { year, slug, metadata } = post;
  const { title, summary, date } = metadata;

  return (
    <Link key={slug} href={`/blog/${year}/${slug}`}>
      <div className="flex flex-col gap-y-[1rem] group">
        <div>
          <p className="text-base font-extrabold md:text-lg group-hover:underline underline-offset-4">
            {title}
          </p>
          <p className="text:sm md:text-base line-clamp-1 text-zinc-100">
            {summary}
          </p>
        </div>
        <div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 text-end">
            {formatDate(date, false)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostItem;
