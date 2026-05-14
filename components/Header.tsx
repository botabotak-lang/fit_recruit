"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MobileMenu } from "@/components/MobileMenu";

const links = [
  { href: "/", label: "ホーム" },
  { href: "/service", label: "業務内容" },
  { href: "/#numbers", label: "拠点・対応" },
  { href: "/company", label: "会社概要" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const dark = scrolled || pathname !== "/";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[90] h-20 transition-colors duration-500 ${
          dark ? "bg-navy/95 shadow-lg backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="site-container flex h-full items-center justify-between">
          <Link href="/" aria-label="有限会社エフアイティ トップへ" className="shrink-0">
            <Image
              src="/images/fit-logo-white.png"
              alt="有限会社エフアイティ"
              width={560}
              height={180}
              className="h-12 w-auto sm:h-14"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="グローバルナビゲーション">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-bold transition ${
                  dark ? "text-white hover:text-orange" : "text-white hover:text-orange"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://recruit.fit-ec.jp"
              className="rounded-md bg-orange px-5 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange/90"
              target="_blank"
              rel="noreferrer"
            >
              採用情報
            </a>
          </nav>

          <button
            type="button"
            aria-label="メニュー"
            className="grid h-11 w-11 place-items-center rounded-md border border-white/40 text-white lg:hidden"
            onClick={() => setOpen(true)}
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
            </span>
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
