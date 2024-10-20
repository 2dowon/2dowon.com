import BlogPostsSection from "app/_components/blog/BlogPostsSection";
import Title from "app/_components/common/Title";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section className="mb-[10rem]">
      <Title>Blog</Title>

      <BlogPostsSection
        type="DEFAULT"
        className="pc:grid pc:grid-cols-2 pc:gap-x-[1rem] pc:gap-y-[2rem] flex flex-col gap-y-[4rem]"
      />
    </section>
  );
}
