import { TPostType } from "@/utils/interfaces/mdx.interface";
import { getPosts } from "@/utils/mdx.utils";
import ArchivePostItem from "./ArchivePostItem";
import WritingPostItem from "./WritingPostItem";

type TPostViewType = "home" | "archive";

const PostsSection = ({
  postType,
  viewType,
  className = "",
}: {
  postType: TPostType;
  viewType: TPostViewType;
  className?: string;
}) => {
  const posts = getPosts(postType);

  return (
    <div className={className}>
      {posts
        .sort((a, b) => {
          return new Date(a.metadata.date) > new Date(b.metadata.date) ? -1 : 1;
        })
        .map((post) => {
          if (viewType === "archive") {
            return (
              <ArchivePostItem key={`archive_post_${post.slug}`} post={post} />
            );
          }
          return (
            <WritingPostItem key={`writing_post_${post.slug}`} post={post} />
          );
        })}
    </div>
  );
};

export default PostsSection;
