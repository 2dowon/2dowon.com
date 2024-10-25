export const siteConfig = {
  url: "https://2dowon.com",
  title: "2down blog",
  description: "",
  copyright: "2dowon © All rights reserved.",
  since: 2024,
  googleAnalyticsId: "",
  author: {
    name: "DOWON LEE",
    photo: "https://avatars.githubusercontent.com/2dowon",
    bio: "Frontend Engineer",
  },
  menus: [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Archives",
      path: "/archives",
    },
    {
      label: "About",
      path: "/about",
    },
  ],
  snippetTags: ["git"],
};

// export const seoConfig: DefaultSeoProps = {
//   title: siteConfig.title,
//   description: siteConfig.description,
//   canonical: siteConfig.url,
//   openGraph: {
//     type: "website",
//     locale: "ko-KR",
//     url: siteConfig.url,
//     siteName: siteConfig.title,
//   },
//   additionalMetaTags: [
//     {
//       name: "author",
//       content: siteConfig.author.name,
//     },
//   ],
// };
