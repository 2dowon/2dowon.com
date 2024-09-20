import BlogPostsSection from "app/_components/blog/BlogPostsSection";
import SubTitle from "app/_components/common/SubTitle";
import Title from "app/_components/common/Title";
import SnippetsSection from "app/_components/snippets/SnippetsSection";

export const metadata = {
  title: "Archives",
  //   description: "Read my archives.",
};

export default function Page() {
  return (
    <section className="mb-[10rem]">
      <Title>Archives</Title>

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-[3rem]">
        <div>
          <SubTitle>Posts</SubTitle>
          <BlogPostsSection />
        </div>

        <div>
          <SubTitle>Snippets</SubTitle>
          <SnippetsSection />
        </div>
      </div>
    </section>
  );
}
