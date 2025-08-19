import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlindGarden - 전문 블라인드 시공 서비스",
  description: "전문적인 블라인드 시공 서비스로 아름다운 공간을 만들어드립니다. 롤스크린, 우드블라인드, 허니콤 등 다양한 블라인드 제품을 제공합니다.",
  keywords: "블라인드, 블라인드시공, 롤스크린, 우드블라인드, 허니콤, 버티컬, 주름블라인드",
  openGraph: {
    title: "BlindGarden - 전문 블라인드 시공 서비스",
    description: "전문적인 블라인드 시공 서비스로 아름다운 공간을 만들어드립니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
