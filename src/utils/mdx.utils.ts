import fs from "fs";
import path from "path";
import { IMetadata, IPost, TPostType } from "./interfaces/mdx.interface";

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

function getMDXData(dir: string): IPost[] {
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

export function getPosts(type?: TPostType): IPost[] {
  let mdxData: IPost[] = [];

  if (type) {
    mdxData = getMDXData(path.join(process.cwd(), "post", type));
  } else {
    // type이 주어지지 않은 경우 "post" 폴더 내 모든 하위 폴더에서 데이터 검색
    const postDir = path.join(process.cwd(), "post");

    // 모든 하위 폴더 가져오기
    const allTypes = fs.readdirSync(postDir);

    allTypes.forEach((folder) => {
      const folderData = getMDXData(path.join(postDir, folder));
      mdxData = mdxData.concat(folderData);
    });
  }

  return mdxData;
}

export function getPost(slug: string): IPost | null {
  const postDir = path.join(process.cwd(), "post");
  // 모든 하위 폴더 가져오기
  const allTypes = fs.readdirSync(postDir);

  for (const folder of allTypes) {
    const filePath = path.join(postDir, folder, `${slug}.mdx`);

    if (fs.existsSync(filePath)) {
      const { metadata, content } = readMDXFile(filePath);
      return {
        metadata,
        slug,
        content,
      };
    }
  }

  return null;
}
