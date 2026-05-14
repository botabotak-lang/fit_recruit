import type { Metadata } from "next";
import { Noto_Sans_JP, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const notoSansJp = Noto_Sans_JP({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const oswald = Oswald({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fit-ec.jp"),
  title: "有限会社エフアイティ｜船舶通信機器・航海計器の保守メンテナンス",
  description:
    "有限会社エフアイティ。船舶通信機器・航海計器の保守点検、修理、設置。本社は静岡県焼津市、対応エリアは全国。現場へ出張し運航を支えます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.variable} ${oswald.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
