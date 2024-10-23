import { formatYYMMDD } from "@/utils/date.util";
import { IBlogPost } from "@/utils/interfaces/mdx.interface";
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
      <div className="group flex items-center justify-between text-black-4 dark:text-gray-5">
        <p className="break-all text-base underline-offset-4 group-hover:underline">
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
