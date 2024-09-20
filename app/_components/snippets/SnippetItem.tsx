import { IBlogPost } from "app/_utils/interfaces/mdx.interface";
import { formatDate } from "app/_utils/mdx.utils";
import Link from "next/link";

const SnippetItem = ({ tag, snippet }: { tag: string; snippet: IBlogPost }) => {
  const { metadata, slug } = snippet;
  const { title, date } = metadata;

  return (
    <Link href={`/snippets/${tag}/${slug}`}>
      <div className="flex flex-col border border-zinc-500 rounded-[0.4rem] p-[1rem] group">
        <p className="font-bold group-hover:underline underline-offset-4">
          [{tag}] {title}
        </p>
        <p className="text-xs text-zinc-600 dark:text-zinc-400">
          {formatDate(date, false)}
        </p>
      </div>
    </Link>
  );
};

export default SnippetItem;
