import { getBlogPosts } from "app/_utils/mdx.utils";
import BlogPostItem from "./BlogPostItem";

const BlogPostsSection = () => {
  const posts = getBlogPosts();

  return (
    <div className="flex flex-col space-y-[1rem] lg:space-y-[2rem]">
      {posts
        .sort((a, b) => {
          return new Date(a.metadata.date) > new Date(b.metadata.date) ? -1 : 1;
        })
        .map((post) => {
          return <BlogPostItem post={post} />;
        })}
    </div>
  );
};

export default BlogPostsSection;
