"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const links = [
  { href: "/", label: "ホーム" },
  { href: "/service", label: "業務内容" },
  { href: "/#numbers", label: "拠点・対応" },
  { href: "/company", label: "会社概要" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "https://recruit.fit-ec.jp", label: "採用情報", external: true },
];

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="メニューを閉じる"
            className="fixed inset-0 z-[70] bg-slate-950/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            aria-label="モバイルメニュー"
            className="fixed right-0 top-0 z-[80] flex h-dvh w-[84%] max-w-sm flex-col bg-white p-6 pt-24"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="block rounded-md px-3 py-2 text-base font-bold text-navy transition hover:bg-orange hover:text-white"
                        onClick={onClose}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="block rounded-md px-3 py-2 text-base font-bold text-navy transition hover:bg-orange hover:text-white"
                        onClick={onClose}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
