import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy py-16 text-white" id="contact">
      <div className="site-container">
        <h2 className="section-title mb-10 text-white">
          <span className="section-title-en">CONTACT</span>
          お問い合わせ
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-2xl font-bold">有限会社エフアイティ</p>
            <p className="mt-4 font-display text-4xl font-bold text-orange">
              <a href="tel:054-628-6378">054-628-6378</a>
            </p>
            <p className="mt-4 text-sm leading-8 text-white/85">
              〒425-0021
              <br />
              静岡県焼津市中港2丁目2−15
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/15">
            <div className="relative aspect-[4/3] w-full" aria-label="所在地の地図">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.416268091352!2d138.323464!3d34.87089199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a4606ae0a212d%3A0x9ed8616f7ac6ebbc!2z77yI5pyJ77yJ44Ko44OV44Ki44Kk44OG44Kj!5e0!3m2!1sja!2sjp!4v1776669147041!5m2!1sja!2sjp"
                title="有限会社エフアイティの地図"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/20 pt-8 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-4 text-sm text-white/80" aria-label="サイトマップ">
            <Link href="/" className="hover:text-orange">
              トップ
            </Link>
            <Link href="/service" className="hover:text-orange">
              業務内容
            </Link>
            <Link href="/company" className="hover:text-orange">
              会社概要
            </Link>
            <a href="https://recruit.fit-ec.jp" className="hover:text-orange" target="_blank" rel="noreferrer">
              採用情報
            </a>
          </nav>
          <p className="text-xs text-white/60">&copy; 2026 有限会社エフアイティ All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
