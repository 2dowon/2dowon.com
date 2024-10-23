import { baseUrl } from "@/utils/const/url.const";
import { getPosts } from "@/utils/mdx.utils";

export default async function sitemap() {
  let posts = getPosts().map((post) => ({
    url: `${baseUrl}/post/${post.slug}`,
    lastModified: post.metadata.date,
  }));

  let routes = ["", "/archives", "/about"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
}
