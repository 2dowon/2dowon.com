import { MDXComponents } from "mdx/types"; // Ensure correct import
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";
import React, { ComponentType, PropsWithChildren, ReactNode } from "react";
import { highlight } from "sugar-high";
import Image from "./common/Image";
import Callout from "./mdx/Callout";

interface TableData {
  headers: string[];
  rows: string[][];
}

function Table({ data }: { data: TableData }) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

interface CustomLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    Omit<LinkProps, "href"> {
  href?: string;
}

function CustomLink({ href = "", children, ...rest }: CustomLinkProps) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

interface RoundedImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
}

function RoundedImage({ alt, ...props }: RoundedImageProps) {
  return <Image alt={alt} className="rounded-lg" {...props} />;
}

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

function Code({ children, ...props }: CodeProps) {
  const codeContent = typeof children === "string" ? children : "";
  const codeHTML = highlight(codeContent);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function createHeading(level: number): ComponentType<PropsWithChildren<{}>> {
  const Heading: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const slug = slugify(children as string);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
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
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
  Callout,
};

interface CustomMDXProps extends Omit<MDXRemoteProps, "components" | "source"> {
  components?: MDXComponents;
  source?: string;
}

export function CustomMDX({
  source,
  components: customComponents,
  ...rest
}: CustomMDXProps) {
  if (!source) {
    return <p>Loading...</p>;
  }

  return (
    <MDXRemote
      {...rest}
      source={source}
      components={{ ...components, ...(customComponents || {}) }}
    />
  );
}
