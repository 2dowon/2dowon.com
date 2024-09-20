import Title from "app/_components/common/Title";
import SnippetsSection from "app/_components/snippets/SnippetsSection";

export const metadata = {
  title: "Snippets",
  //   description: "Read my snippets.",
};

export default function Page() {
  return (
    <section className="mb-[10rem]">
      <Title>Snippets</Title>

      <SnippetsSection isTagSelectorVisible />
    </section>
  );
}
