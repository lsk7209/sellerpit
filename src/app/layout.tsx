import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/layout/AppLayout";
import { Toaster } from "sonner";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sellerpit.kr'),
  title: {
    default: "Seller Fit - 셀러핏 | 온라인 셀러를 위한 스마트 마진 계산기",
    template: "%s | Seller Fit"
  },
  description: "스마트스토어, 쿠팡, 11번가 등 온라인 셀러를 위한 무료 마진 계산기. 실시간 순수익 계산, 상품 비교, 부가세 자동 계산, CBM 계산까지. 정확한 수익 분석으로 성공적인 온라인 판매를 시작하세요.",
  keywords: [
    "마진계산기", "셀러핏", "온라인셀러", "스마트스토어", "쿠팡셀러",
    "부가세계산", "CBM계산", "수익계산", "마진율", "판매수수료",
    "이커머스", "온라인판매", "소싱계산", "수익성분석", "상품비교",
    "네이버스마트스토어", "쿠팡파트너스", "11번가", "지마켓", "옥션"
  ],
  authors: [{ name: "Seller Fit Team" }],
  creator: "Seller Fit",
  publisher: "Seller Fit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://sellerpit.kr",
    siteName: "Seller Fit",
    title: "Seller Fit - 온라인 셀러를 위한 스마트 마진 계산기",
    description: "스마트스토어, 쿠팡 등 온라인 셀러를 위한 무료 마진 계산, 비교 분석, 수익 기록 도구",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Seller Fit - 셀러핏 마진 계산기",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seller Fit - 온라인 셀러를 위한 스마트 마진 계산기",
    description: "무료 마진 계산, 상품 비교, 부가세 자동 계산. 온라인 셀러의 필수 도구",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'E6rfB6XCmAA7BHxdwvzmBGDwSIXp5WKXqqqNSoDVzjw',
    other: {
      'naver-site-verification': 'edf7dc5b4e852efbd523a6f4d54ce14a1881950f',
    },
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
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-slate-50 text-slate-900 antialiased selection:bg-indigo-100`}
      >
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3050601904412736"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <AppLayout>
          {children}
        </AppLayout>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
