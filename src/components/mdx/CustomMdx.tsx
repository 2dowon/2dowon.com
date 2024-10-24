import { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import { createElement } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode, { type Options } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkUnwrapImages from "remark-unwrap-images";
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
  pre: CustomCode,
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr aria-orientation="horizontal" {...props} className="my-[3rem]" />
  ),
  Callout,
};

const prettyCodeOptions: Options = {
  keepBackground: true,
  theme: "github-dark-default",
};

const CustomMdx = ({ source }: { source?: string }) => {
  if (!source) {
    return null;
  }

  return (
    <MDXRemote
      components={{ ...components }}
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkUnwrapImages, remarkGfm, remarkBreaks],
          rehypePlugins: [
            rehypeSlug,
            rehypeAutolinkHeadings,
            [rehypePrettyCode, prettyCodeOptions],
          ],
        },
      }}
    />
  );
};

export default CustomMdx;
