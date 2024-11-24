import SubTitle from "@/components/common/SubTitle";
import Title from "@/components/common/Title";
import SubHeader from "@/components/layout/SubHeader";
import PostsSection from "@/components/post/PostsSection";

export const metadata = {
  title: "Archives",
  //   description: "Read my archives.",
};

export default function Page() {
  return (
    <section className="mx-[1rem] mb-[10rem] pc:mx-auto pc:w-[50rem]">
      <SubHeader />

      <Title>Archives</Title>

      <div className="space-y-[2rem] md:grid md:grid-cols-2 md:gap-x-[3rem] md:space-y-0">
        <div>
          <SubTitle>Writing</SubTitle>
          <PostsSection
            postType="writing"
            viewType="archive"
            className="flex flex-col space-y-[0.5rem] md:space-y-[1rem]"
          />
        </div>

        <div>
          <SubTitle>Note</SubTitle>
          <PostsSection
            postType="note"
            viewType="archive"
            className="flex flex-col space-y-[0.5rem] md:space-y-[1rem]"
          />
        </div>
      </div>
    </section>
  );
}
