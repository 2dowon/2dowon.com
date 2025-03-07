import { formatYYMMDD } from "@/utils/date.util";
import { IPost } from "@/utils/interfaces/mdx.interface";
import Link from "next/link";

const ArchivePostItem = ({ post }: { post: IPost }) => {
  const { slug, metadata } = post;
  const { title, date } = metadata;

  return (
    <Link href={`/post/${slug}`}>
      <div className="flex items-center justify-between group text-black-4 dark:text-gray-5">
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

export default ArchivePostItem;
