import Header from "@/components/layout/Header";
import "@/styles/global.css";
import { baseUrl } from "@/utils/const/url.const";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

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
    <html lang="ko" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="IXiQxAJ0algRhNn6Rul4WGs668_anc--ScYGpVNRc6w"
        />
        <link
          rel="stylesheet"
          as="style"
          // @ts-ignore
          crossOrigin="true"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
