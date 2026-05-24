import type { Metadata } from "next";
import { siteCopy } from "@/data/site";
import "./globals.css";

const metadataTitle = `${siteCopy.name} | 영천 화분·묘목 농원`;
const metadataDescription =
  "경북 영천에서 만나는 화분과 묘목 농원, 덕앤플라워의 소개와 방문 정보를 한눈에 살펴보세요.";

export const metadata: Metadata = {
  applicationName: siteCopy.name,
  title: metadataTitle,
  description: metadataDescription,
  keywords: [
    siteCopy.name,
    "영천 농원",
    "영천 화분",
    "영천 묘목",
    "경북 농원",
  ],
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    locale: "ko_KR",
    siteName: siteCopy.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
