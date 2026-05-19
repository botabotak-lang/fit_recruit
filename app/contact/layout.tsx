import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ｜有限会社エフアイティ｜船舶通信機器・航海計器の保守メンテナンス",
  description:
    "有限会社エフアイティへのお問い合わせはこちら。業務のご相談・見積もりのご依頼など、フォームまたはお電話でお気軽にご連絡ください。",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
