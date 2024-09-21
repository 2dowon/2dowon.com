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
      <div className="flex items-center justify-between group text-zinc-600 dark:text-zinc-400">
        <p className="text-base font-bold break-all underline-offset-4 line-clamp-1 group-hover:underline">
          [{tag}] {title}
        </p>
        <p className="text-xs md:text-sm text-end ml-[0.5rem]">
          {formatYYMMDD(date)}
        </p>
      </div>
    </Link>
  );
};

export default SnippetSimpleItem;
