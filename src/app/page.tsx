import Divider from "@/components/common/Divider";
import Profile from "@/components/common/Profile";
import SubHeader from "@/components/layout/SubHeader";
import PostsSection from "@/components/post/PostsSection";

export default function Page() {
  return (
    <section className="mb-[10rem]">
      <SubHeader />

      <Profile className="mt-[1rem]" />

      <Divider className="my-[3rem]" />

      <div className="pc:mx-auto pc:w-[50rem]">
        <PostsSection
          postType="writing"
          viewType="home"
          className="mx-[1rem] flex flex-col gap-y-[4rem] pc:grid pc:grid-cols-2 pc:gap-x-[1rem] pc:gap-y-[2rem]"
        />
      </div>
    </section>
  );
}
