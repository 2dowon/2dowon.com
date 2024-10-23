import { formatDate } from "@/utils/date.util";
import { IPost } from "@/utils/interfaces/mdx.interface";
import Image from "next/image";
import Link from "next/link";

const WritingPostItem = ({ post }: { post: IPost }) => {
  const { slug, metadata } = post;
  const { title, summary, date, thumbnail } = metadata;

  return (
    <Link href={`/post/${slug}`} className="flex flex-col gap-y-[1rem]">
      <div className="group relative aspect-video h-auto w-full overflow-hidden rounded-[0.4rem] border border-gray-2 transition-transform duration-200 hover:-translate-y-[0.7rem] dark:border-none">
        <Image
          src={thumbnail}
          alt={`${title} post thumbnail`}
          fill
          sizes="(max-width: 599px) 100vw, 40vw"
          className="object-cover"
          priority
        />
        <div className="absolute z-10 w-full h-full group-hover:bg-black group-hover:opacity-50" />
        <p className="invisible absolute bottom-[0.5rem] z-20 px-[1rem] text-base font-medium text-white group-hover:visible">
          {summary}
        </p>
      </div>

      <div>
        <p className="mb-[0.5rem] text-end text-sm text-gray-6">
          {formatDate(date, false)}
        </p>
        <p className="text-base font-extrabold underline-offset-4">{title}</p>
      </div>
      <></>
    </Link>
  );
};

export default WritingPostItem;
