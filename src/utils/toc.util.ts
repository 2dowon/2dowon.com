import { ITocItem } from "./interfaces/mdx.interface";

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\p{L}\d\-]+/gu, "") // Remove all non-word characters except for -, but keep letters (including Korean)
    .replace(/\-\-+/g, "-");
}

/** `## 제목` 형태의 마크다운 문법을 제거하고 순수 텍스트만 남긴다. */
function stripInlineMarkdown(text: string): string {
  return text
    .replace(/`([^`]*)`/g, "$1") // `code`
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1") // [text](url), ![alt](src)
    .replace(/(\*\*|__)(.*?)\1/g, "$2") // **bold**
    .replace(/(\*|_)(.*?)\1/g, "$2") // *italic*
    .replace(/~~(.*?)~~/g, "$1") // ~~strike~~
    .trim();
}

/**
 * MDX 원문에서 h2, h3 헤딩을 추출해 목차를 만든다.
 * h3는 직전 h2의 하위 항목으로 중첩된다.
 */
export function getTableOfContents(content: string): ITocItem[] {
  const items: ITocItem[] = [];
  let isInCodeBlock = false;

  for (const line of content.split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) {
      isInCodeBlock = !isInCodeBlock;
      continue;
    }
    if (isInCodeBlock) {
      continue;
    }

    const match = /^(#{2,3})\s+(.+)$/.exec(line);
    if (!match) {
      continue;
    }

    const depth = match[1].length;
    const title = stripInlineMarkdown(match[2]);
    if (!title) {
      continue;
    }

    const item: ITocItem = { url: `#${slugify(title)}`, title };
    const lastItem = items[items.length - 1];

    if (depth === 3 && lastItem) {
      lastItem.items = [...(lastItem.items ?? []), item];
    } else {
      items.push(item);
    }
  }

  return items;
}
