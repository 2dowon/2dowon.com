import BlogPostsSection from "@/components/blog/BlogPostsSection";
import Title from "@/components/common/Title";

export const dynamic = "force-static";
export const revalidate = false;

export default function Page() {
  return (
    <section className="mb-[10rem]">
      <Title>Blog</Title>

      <BlogPostsSection
        type="DEFAULT"
        className="flex flex-col gap-y-[4rem] pc:grid pc:grid-cols-2 pc:gap-x-[1rem] pc:gap-y-[2rem]"
      />
    </section>
  );
}
