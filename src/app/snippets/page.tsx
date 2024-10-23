import Title from "@/components/common/Title";
import SnippetsSection from "@/components/snippets/SnippetsSection";

export const metadata = {
  title: "Snippets",
  //   description: "Read my snippets.",
};

export default function Page() {
  return (
    <section className="mb-[10rem]">
      <Title>Snippets</Title>

      <SnippetsSection
        type="DEFAULT"
        isTagSelectorVisible
        isTagTitleVisible
        tagSectionClassName="md:grid-cols-2 md:grid md:gap-[1rem] flex flex-col space-y-[1rem] md:space-y-0"
      />
    </section>
  );
}
