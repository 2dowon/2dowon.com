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
    contacts: {
      github: "https://github.com/2dowon",
      linkedin:
        "https://www.linkedin.com/in/2dowon?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      instagram: "",
    },
  },
  menus: [
    {
      label: "Blog",
      path: "/blog",
    },
    {
      label: "Snippets",
      path: "/snippets",
    },
    {
      label: "Archives",
      path: "/archives",
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
