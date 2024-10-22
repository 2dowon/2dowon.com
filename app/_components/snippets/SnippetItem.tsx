import { formatDate } from "app/_utils/date.util";
import { IBlogPost } from "app/_utils/interfaces/mdx.interface";
import Link from "next/link";

const SnippetItem = ({ tag, snippet }: { tag: string; snippet: IBlogPost }) => {
  const { metadata, slug } = snippet;
  const { title, date } = metadata;

  return (
    <Link href={`/snippets/${tag}/${slug}`}>
      <div className="group flex flex-col rounded-[0.4rem] border border-zinc-500 p-[1rem]">
        <p className="font-bold underline-offset-4 group-hover:underline">
          {title}
        </p>
        <p className="text-xs text-gray-6">{formatDate(date, false)}</p>
      </div>
    </Link>
  );
};

export default SnippetItem;
