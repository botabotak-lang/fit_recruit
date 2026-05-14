import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { HeroTitleReveal } from "@/components/HeroTitleReveal";


export default function HomePage() {
  return (
    <>
      <section className="relative -mt-20 min-h-screen overflow-hidden" aria-label="メインビジュアル" id="fv-lead">
        <Image
          src="/images/fv-hero-composite.png"
          alt="大型漁船が係留される港、昼の船舶ブリッジでの航海計器・レーダー作業、海洋無線機器の保守作業をオレンジの斜めラインでつないだヒーロー画像"
          width={1024}
          height={576}
          priority
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="hero-overlay absolute inset-0" aria-hidden="true" />
        <div className="site-container relative z-10 flex min-h-screen flex-col justify-center pb-16 pt-36 text-white">
          <p className="mb-3 font-display text-sm uppercase tracking-[0.28em] text-orange">Safety & Reliability on the Sea</p>
          <HeroTitleReveal text="海の安全を技術で守る" />
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/90 sm:text-lg">
            焼津市の船舶通信機器・航海計器・漁労機器の販売/メンテナンスのエフアイティ。
            <br className="hidden sm:block" />
            唯一無二の頼られる船舶技術会社であり続けます。
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-md bg-orange px-7 py-3 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange/90"
            >
              お問い合わせ・ご相談
            </a>
            <a
              href="https://recruit.fit-ec.jp"
              className="rounded-md border border-white/50 px-6 py-3 text-sm font-bold text-white transition hover:border-orange hover:text-orange"
              target="_blank"
              rel="noreferrer"
            >
              採用情報
            </a>
            <Link
              href="/company"
              className="rounded-md border border-white/40 px-6 py-3 text-sm font-bold text-white transition hover:border-orange hover:text-orange"
            >
              会社概要
            </Link>
          </div>

          <div className="mt-10 w-full max-w-2xl rounded-xl border border-white/15 bg-navy/30 p-4">
            <p className="mb-3 text-sm font-bold">
              <span className="mr-2 font-display tracking-[0.2em] text-orange">RECRUIT MOVIE</span>
              仕事と雰囲気
            </p>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src="https://www.youtube.com/embed/ib0h9g-MoB8"
                title="FIT採用 仕事と雰囲気（仮動画）"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
            <p className="mt-3 text-sm">
              <a href="https://recruit.fit-ec.jp/#video" className="font-bold text-orange underline underline-offset-4" target="_blank" rel="noreferrer">
                採用情報ページで詳しく見る
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" id="service">
        <div className="site-container max-w-3xl text-center">
          <Reveal>
            <h2 className="section-title mb-8">
              <span className="section-title-en">SERVICE</span>
              業務内容
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mb-8 text-sm leading-8 text-slate-700">
              船舶に装備される通信機器・航海計器・漁労機器を専門領域とし、定期点検から故障修理・設置工事まで一貫してお引き受けします。
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="mb-10 flex flex-wrap justify-center gap-3" aria-label="対応機器カテゴリ">
              {["船舶通信機器", "航海計器", "漁労機器"].map((label) => (
                <li key={label}>
                  <span className="inline-block rounded-full border border-orange/40 px-5 py-2 text-sm font-bold text-navy">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.16}>
            <Link
              href="/service"
              className="inline-block rounded-md bg-orange px-8 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange/90"
            >
              業務内容の詳細を見る
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy py-20 text-white" id="numbers">
        <div className="site-container">
          <Reveal>
            <h2 className="section-title mb-10 text-center text-white">
              <span className="section-title-en">FACTS &amp; TRUST</span>
              拠点・対応範囲と、お取引の安心感
            </h2>
          </Reveal>
          <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-8 text-white/90">
            お取引では、現場の条件に即したご提案と、作業の区切りまで責任を持った対応を心がけています。急な不具合のご相談から定期点検まで、まずはお電話にてお知らせください。
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal>
              <article className="rounded-xl border border-white/20 bg-white/5 p-6 text-center">
                <CountUp to={2005} suffix="年" />
                <p className="mt-3 text-sm text-white/85">創業</p>
              </article>
            </Reveal>
            <Reveal delay={0.05}>
              <article className="rounded-xl border border-white/20 bg-white/5 p-6 text-center">
                <p className="font-display text-5xl font-bold text-orange">焼津市</p>
                <p className="mt-3 text-sm text-white/85">本社・拠点（静岡県）</p>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="rounded-xl border border-white/20 bg-white/5 p-6 text-center">
                <p className="text-3xl font-black text-orange">点検〜設置</p>
                <p className="mt-3 text-sm text-white/85">保守・修理・設置工事まで</p>
              </article>
            </Reveal>
            <Reveal delay={0.15}>
              <article className="rounded-xl border border-white/20 bg-white/5 p-6 text-center">
                <p className="font-display text-5xl font-bold text-orange">全国</p>
                <p className="mt-3 text-sm text-white/85">対応エリア（現場へ出張）</p>
              </article>
            </Reveal>
          </div>
          <Reveal className="mt-8 text-center" delay={0.18}>
            <Link
              href="/company"
              className="inline-block rounded-md border border-white/40 px-8 py-3 text-sm font-bold text-white transition hover:border-orange hover:text-orange"
            >
              会社概要を見る
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-20" id="about">
        <div className="site-container">
          <Reveal>
            <h2 className="section-title mb-10 text-center">
              <span className="section-title-en">OUR WORK</span>
              私たちの仕事
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal>
              <Image
                src="/images/about-work.webp"
                alt="船舶の航海計器・通信機器の保守点検作業の様子"
                width={2752}
                height={1536}
                className="h-full w-full rounded-xl object-cover"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <Image
                src="/images/about-port.webp"
                alt="焼津の漁港に係留された漁船"
                width={2752}
                height={1536}
                className="h-full w-full rounded-xl object-cover"
              />
            </Reveal>
          </div>
          <Reveal className="mt-8">
            <p className="text-sm leading-8 text-slate-700 sm:text-base">
              当社は、船舶に装備される
              <strong>無線通信機器</strong>
              および
              <strong>航海計器</strong>
              を専門領域とし、定期点検、故障・不具合時の修理、設置工事までを一貫してお引き受けしています。
              <strong>本社・拠点は静岡県焼津市</strong>
              、
              <strong>対応エリアは全国</strong>
              です。港・岸壁や船上などお客様の現場へ出張し、運航・操業に支障が生じないよう、迅速かつ丁寧に対応いたします。
            </p>
          </Reveal>
          <Reveal className="mt-4" delay={0.06}>
            <p className="text-sm leading-8 text-slate-700 sm:text-base">
              これらの装備は安全な航行に直結します。不具合への判断や復旧手順の取りまとめは、担当者が責任を持って一連の流れとして対応することが重要です。長年にわたる技術と現場経験を踏まえ、お客様ならびに関係各位と必要な情報を共有しながら、ご依頼いただいた内容を確実に完了までお引き受けいたします。
            </p>
          </Reveal>
        </div>
      </section>

    </>
  );
}
