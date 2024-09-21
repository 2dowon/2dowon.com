import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Footer from "./_components/layout/Footer";
import HeaderNav from "./_components/layout/HeaderNav";
import { themeEffect } from "./_utils/themeEffect";
import "./global.css";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "2dowon blog",
    template: "%s | 2dowon",
  },
  description: "깊이 파기 위해 넓게 삽질하는 공간입니다.",
  openGraph: {
    title: "2dowon blog",
    description: "깊이 파기 위해 넓게 삽질하는 공간입니다.",
    url: baseUrl,
    siteName: "2dowon blog",
    locale: "ko-KR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className="text-black bg-white dark:text-zinc-50 dark:bg-primary-bg"
    >
      <head>
        <link
          rel="stylesheet"
          as="style"
          // @ts-ignore
          crossOrigin="true"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})()`,
          }}
        />
      </head>
      <body>
        <main className="max-w-[55rem] mx-[1rem] mt-[2rem] md:mx-auto">
          <HeaderNav />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
