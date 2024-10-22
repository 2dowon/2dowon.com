import { formatYYMMDD } from "app/_utils/date.util";
import { IBlogPost } from "app/_utils/interfaces/mdx.interface";
import Link from "next/link";

const SnippetSimpleItem = ({
  tag,
  snippet,
}: {
  tag: string;
  snippet: IBlogPost;
}) => {
  const { metadata, slug } = snippet;
  const { title, date } = metadata;

  return (
    <Link href={`/snippets/${tag}/${slug}`}>
      <div className="flex items-center justify-between text-black-4 dark:text-gray-5 group">
        <p className="text-base break-all underline-offset-4 group-hover:underline">
          [{tag}] {title}
        </p>
        <p className="ml-[0.5rem] text-end text-xs md:text-sm">
          {formatYYMMDD(date)}
        </p>
      </div>
    </Link>
  );
};

export default SnippetSimpleItem;
