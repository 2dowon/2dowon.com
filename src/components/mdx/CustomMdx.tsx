import { cn } from "@/utils/style.utils";
import { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import { createElement } from "react";
import Callout from "./Callout";
import CustomCode from "./CustomCode";
import CustomLink from "./CustomLink";

function slugify(str: any) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\p{L}\d\-]+/gu, "") // Remove all non-word characters except for -, but keep letters (including Korean)
    .replace(/\-\-+/g, "-");
}

function createHeading(level: any) {
  const Heading = ({ children }: any) => {
    const slug = slugify(children);

    return createElement(
      `h${level}`,
      { id: slug },
      [
        createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children,
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

const components: MDXComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  a: CustomLink,
  code: CustomCode,
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr aria-orientation="horizontal" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  Callout,
};

const CustomMdx = ({ source }: { source?: string }) => {
  if (!source) {
    return null;
  }

  return <MDXRemote source={source} components={{ ...components }} />;
};

export default CustomMdx;
