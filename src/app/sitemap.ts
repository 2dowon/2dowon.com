import { getAllSnippets, getBlogPosts } from "@/utils/mdx.utils";

export const baseUrl = "https://2dowon.com";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.year}/${post.slug}`,
    lastModified: post.metadata.date,
  }));

  let snippets = getAllSnippets().map((post) => ({
    url: `${baseUrl}/snippets/${post.metadata.tag}/${post.slug}`,
    lastModified: post.metadata.date,
  }));

  let routes = ["", "/blog", "/snippets"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...snippets];
}
