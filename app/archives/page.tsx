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

      <div className="md:grid md:grid-cols-2 md:gap-x-[3rem] space-y-[2rem] md:space-y-0">
        <div>
          <SubTitle>Posts</SubTitle>
          <BlogPostsSection
            type="SIMPLE"
            className="flex flex-col space-y-[0.5rem] md:space-y-[1rem]"
          />
        </div>

        <div>
          <SubTitle>Snippets</SubTitle>
          <SnippetsSection
            type="SIMPLE"
            tagSectionClassName="flex flex-col space-y-[0.5rem] md:space-y-[1rem]"
          />
        </div>
      </div>
    </section>
  );
}
