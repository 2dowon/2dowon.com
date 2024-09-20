import { getTagSnippets } from "app/_utils/mdx.utils";
import SnippetItem from "./SnippetItem";

const SnippetsTagSection = ({ tag }: { tag: string }) => {
  const snippets = getTagSnippets(tag);

  return (
    <div>
      {snippets
        .sort((a, b) => {
          return new Date(a.metadata.publishedAt) >
            new Date(b.metadata.publishedAt)
            ? -1
            : 1;
        })
        .map((snippet) => {
          return <SnippetItem tag={tag} snippet={snippet} />;
        })}
    </div>
  );
};

export default SnippetsTagSection;
