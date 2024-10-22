import { formatYYMMDD } from "app/_utils/date.util";
import { IBlogPost } from "app/_utils/interfaces/mdx.interface";
import Link from "next/link";

const BlogPostSimpleItem = ({ post }: { post: IBlogPost }) => {
  const { year, slug, metadata } = post;
  const { title, date } = metadata;

  return (
    <Link key={slug} href={`/post/${year}/${slug}`}>
      <div className="flex items-center justify-between text-black-4 dark:text-gray-5 group">
        <p className="text-base break-all underline-offset-4 group-hover:underline">
          {title}
        </p>
        <p className="ml-[0.5rem] text-end text-xs md:text-sm">
          {formatYYMMDD(date)}
        </p>
      </div>
    </Link>
  );
};

export default BlogPostSimpleItem;
