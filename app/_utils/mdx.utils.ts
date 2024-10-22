import { siteConfig } from "app/config";
import fs from "fs";
import path from "path";
import { IBlogPost, IMetadata } from "./interfaces/mdx.interface";

interface ParsedFrontmatter {
  metadata: IMetadata;
  content: string;
}

function parseFrontmatter(fileContent: string): ParsedFrontmatter {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    throw new Error("Invalid frontmatter format");
  }

  const frontMatterBlock = match[1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<IMetadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof IMetadata] = value;
  });

  return { metadata: metadata as IMetadata, content };
}

function getMDXFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string): ParsedFrontmatter {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string): IBlogPost[] {
  const mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    const year = metadata.date.slice(0, 4);

    return {
      metadata,
      year,
      slug,
      content,
    };
  });
}

export function getBlogPosts(): IBlogPost[] {
  const sinceYear = siteConfig.since;
  const currentYear = new Date().getFullYear();
  const mdxData: IBlogPost[] = [];

  for (let i = sinceYear; i <= currentYear; i++) {
    const yearlyData = getMDXData(
      path.join(process.cwd(), "archives", "blog", `${i}`),
    );
    mdxData.push(...yearlyData);
  }

  return mdxData;
}

export function getBlogPost({
  slug,
  year,
}: {
  slug: string;
  year: string;
}): IBlogPost | null {
  const dir = path.join(process.cwd(), "archives", "blog", year);
  const filePath = path.join(dir, `${slug}.mdx`);

  if (fs.existsSync(filePath)) {
    const { metadata, content } = readMDXFile(filePath);
    return {
      metadata,
      year,
      slug,
      content,
    };
  }

  return null;
}

export function getAllSnippets(): IBlogPost[] {
  const mdxData: IBlogPost[] = [];

  for (const tag of siteConfig.snippetTags) {
    const tagData = getMDXData(
      path.join(process.cwd(), "archives", "snippets", `${tag}`),
    );
    mdxData.push(...tagData);
  }

  return mdxData;
}

export function getTagSnippet({
  tag,
  slug,
}: {
  tag: string;
  slug: string;
}): IBlogPost | null {
  const dir = path.join(process.cwd(), "archives", "snippets", tag);
  const filePath = path.join(dir, `${slug}.mdx`);

  if (fs.existsSync(filePath)) {
    const { metadata, content } = readMDXFile(filePath);
    return {
      metadata,
      slug,
      content,
      year: metadata.date.slice(0, 4),
    };
  }

  return null;
}

export function getTagSnippets(tag: string): IBlogPost[] {
  return getMDXData(path.join(process.cwd(), "archives", "snippets", tag));
}
