import { siteConfig } from "app/config";
import SnippetsTagSection from "./SnippetsTagSection";

const SnippetsSection = ({
  isTagSelectorVisible = false,
}: {
  isTagSelectorVisible?: boolean;
}) => {
  const tags = siteConfig.snippetTags;

  return (
    <div>
      {/* {isTagSelectorVisible &&
        ["All", tags].map((tag) => {
          return <div>{tag}</div>;
        })} */}

      {tags.map((tag) => {
        return <SnippetsTagSection key={tag} tag={tag} />;
      })}
    </div>
  );
};

export default SnippetsSection;
