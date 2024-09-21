import { siteConfig } from "app/config";
import fs from "fs";
import path from "path";
import { IBlogPost, IMetadata } from "./interfaces/mdx.interface";

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<IMetadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof IMetadata] = value;
  });

  return { metadata: metadata as IMetadata, content };
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    let year = metadata.date.slice(0, 4);

    return {
      metadata,
      year,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  const sinceYear = siteConfig.since;
  const currentYear = new Date().getFullYear();

  const mdxData: IBlogPost[] = [];

  for (let i = sinceYear; i <= currentYear; i++) {
    mdxData.push(
      ...getMDXData(path.join(process.cwd(), "archives", "blog", `${i}`))
    );
  }

  return mdxData;
}

export function getAllSnippets() {
  const mdxData: IBlogPost[] = [];

  for (const tag of siteConfig.snippetTags) {
    mdxData.push(
      ...getMDXData(path.join(process.cwd(), "archives", "snippets", `${tag}`))
    );
  }

  return mdxData;
}

export function getTagSnippets(tag: string) {
  return getMDXData(path.join(process.cwd(), "archives", "snippets", tag));
}
