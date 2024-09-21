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
        className="md:grid-cols-2 md:grid md:gap-x-[3rem] md:gap-y-[4rem] flex flex-col space-y-[1rem] md:space-y-0"
      />
    </section>
  );
}
