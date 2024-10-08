import { getTagSnippets } from "app/_utils/mdx.utils";
import SnippetItem from "./SnippetItem";
import SnippetSimpleItem from "./SnippetSimpleItem";
import { SnippetItemType } from "./SnippetsSection";

const SnippetsTagSection = ({
  tag,
  type,
  isTagTitleVisible,
  className = "",
}: {
  tag: string;
  type: SnippetItemType;
  isTagTitleVisible?: boolean;
  className?: string;
}) => {
  const snippets = getTagSnippets(tag);

  return (
    <>
      {isTagTitleVisible && (
        <p className="text-lg font-extrabold md:text-xl mb-[0.5rem] md:mb-[1rem]">
          {tag}
        </p>
      )}

      <div className={className}>
        {snippets
          .sort((a, b) => {
            return new Date(a.metadata.date) > new Date(b.metadata.date)
              ? -1
              : 1;
          })
          .map((snippet) => {
            if (type === "SIMPLE") {
              return <SnippetSimpleItem tag={tag} snippet={snippet} />;
            }
            return <SnippetItem tag={tag} snippet={snippet} />;
          })}
      </div>
    </>
  );
};

export default SnippetsTagSection;
