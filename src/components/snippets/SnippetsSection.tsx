import { siteConfig } from "@/app/config";
import SnippetsTagSection from "./SnippetsTagSection";

export type SnippetItemType = "DEFAULT" | "SIMPLE";

const SnippetsSection = ({
  type,
  isTagSelectorVisible = false,
  isTagTitleVisible = false,
  tagSectionClassName,
}: {
  type: SnippetItemType;
  isTagTitleVisible?: boolean;
  isTagSelectorVisible?: boolean;
  tagSectionClassName?: string;
}) => {
  const tags = siteConfig.snippetTags;

  return (
    <div>
      {/* {isTagSelectorVisible &&
        ["All", tags].map((tag) => {
          return <div>{tag}</div>;
        })} */}

      {tags.map((tag) => {
        return (
          <SnippetsTagSection
            key={tag}
            tag={tag}
            type={type}
            isTagTitleVisible={isTagTitleVisible}
            className={tagSectionClassName}
          />
        );
      })}
    </div>
  );
};

export default SnippetsSection;
