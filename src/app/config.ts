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
      // instagram: "",
      // email: "dwon424@gmail.com",
      legacyBlog: "https://2dowon-log.netlify.app/",
      tistory: "https://dwon-lee.tistory.com/",
    },
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
