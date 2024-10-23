import { getBlogPosts } from "@/utils/mdx.utils";
import BlogPostItem from "./BlogPostItem";
import BlogPostSimpleItem from "./BlogPostSimpleItem";

type BlogPostType = "DEFAULT" | "SIMPLE";

const BlogPostsSection = ({
  type,
  className = "",
}: {
  type: BlogPostType;
  className?: string;
}) => {
  const posts = getBlogPosts();

  return (
    <div className={className}>
      {posts
        .sort((a, b) => {
          return new Date(a.metadata.date) > new Date(b.metadata.date) ? -1 : 1;
        })
        .map((post) => {
          if (type === "SIMPLE") {
            return <BlogPostSimpleItem post={post} />;
          }
          return <BlogPostItem post={post} />;
        })}
    </div>
  );
};

export default BlogPostsSection;
