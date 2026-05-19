import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "会社概要｜有限会社エフアイティ｜船舶通信機器・航海計器の保守メンテナンス",
  description:
    "有限会社エフアイティの代表挨拶、経営理念（MVV）、会社情報、アクセス。静岡県焼津市。船舶通信機器・航海計器の保守メンテナンス。",
};

const profileRows = [
  ["商号", "有限会社エフアイティ"],
  ["代表者", "代表取締役　豊島 政一"],
  ["設立", "2005年"],
  ["資本金", "300万円"],
  ["従業員数", "5名"],
  ["所在地", "〒425-0021\n静岡県焼津市中港2丁目2−15"],
  ["電話", "054-628-6378"],
  ["FAX", "054-628-6379"],
  ["メール", "toyo@fit-ec.com"],
  ["主要取引金融機関", "静岡銀行"],
  ["登録点検事業社", "GMDSS設備サービスステーション"],
  ["許認可・認定等", "ふじのくに健康づくり推進ホワイト事業所認定\n健康経営優良法人2026"],
  ["事業内容", "船舶通信機器・航海計器の保守点検、修理、設置工事、出張対応（対応エリアは全国）など（詳細は業務内容）"],
  ["お問い合わせ", "業務のご相談は お問い合わせ または上記電話・メールにて。"],
];

export default function CompanyPage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#243352] to-[#2d4a7a]" />
        <div className="site-container relative z-10 text-center">
          <p className="mb-2 font-display text-sm uppercase tracking-[0.22em] text-orange">COMPANY</p>
          <h1 className="text-fluid-xl font-black">会社概要</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-white/90 sm:text-base">
            経営の考え方と会社情報を掲載しています。採用をご検討の方は、下記「採用情報」から詳細をご覧ください。
          </p>
          <nav className="mt-8 flex flex-wrap justify-center gap-5 text-sm" aria-label="このページ内の移動">
            <a href="#president" className="border-b border-white/40 pb-1 font-bold hover:border-orange">
              代表挨拶
            </a>
            <a href="#mvv" className="border-b border-white/40 pb-1 font-bold hover:border-orange">
              経営理念
            </a>
            <a href="#profile" className="border-b border-white/40 pb-1 font-bold hover:border-orange">
              会社情報
            </a>
            <a href="#access" className="border-b border-white/40 pb-1 font-bold hover:border-orange">
              アクセス
            </a>
          </nav>
        </div>
      </section>

      <section className="py-20" id="president">
        <div className="site-container max-w-5xl">
          <Reveal>
            <h2 className="section-title mb-10 text-center">
              <span className="section-title-en">MESSAGE</span>
              代表挨拶
            </h2>
          </Reveal>
          <div className="grid gap-8 rounded-xl border border-slate-200 bg-white p-7 md:grid-cols-[2fr_3fr]">
            <div className="overflow-hidden rounded-lg" style={{ minHeight: "360px" }}>
              <Image
                src="/images/shacho-portrait.webp"
                alt="代表取締役 豊島 政一"
                width={600}
                height={500}
                className="h-full w-full object-cover object-top"
                priority
              />
            </div>
            <div className="space-y-5 text-sm leading-8 text-slate-700 sm:text-base">
              <p>
                海に出る船の安全は、地域の暮らしや産業の土台でもあります。だからこそ、技術だけでなく
                <strong>誠実に向き合い続けること</strong>
                が、経営者としての責任だと考えています。
              </p>
              <p>
                お取引いただく皆様には、安心してお任せいただける対応を
                <strong>お約束します</strong>
                。仲間には、成長できるフィールドと風土を大切にし、経営理念を土台に頼られる会社であり続けられるよう、努力してまいります。
              </p>
              <p className="text-sm text-slate-500">
                代表取締役　<strong className="text-lg text-navy">豊島 政一</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20" id="mvv">
        <div className="site-container">
          <Reveal>
            <h2 className="section-title mb-10 text-center">
              <span className="section-title-en">MVV</span>
              経営理念（ミッション・ビジョン・バリュー）
            </h2>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal>
              <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-display text-sm uppercase tracking-[0.18em] text-orange">Mission</h3>
                <p className="text-xl font-bold text-navy">船の安全を、技術で守る。</p>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-display text-sm uppercase tracking-[0.18em] text-orange">Vision</h3>
                <p className="text-xl font-bold text-navy">FITがいれば大丈夫、と言われる技術会社であり続ける。</p>
              </article>
            </Reveal>
            <Reveal delay={0.16}>
              <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-2 font-display text-sm uppercase tracking-[0.18em] text-orange">Values</h3>
                <p className="text-base font-bold leading-8 text-navy">やり切る／誠実に、まっすぐに／現場の和を大切にする</p>
              </article>
            </Reveal>
          </div>

          <div className="mt-10 space-y-6">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="mb-3 border-b-2 border-orange pb-2 text-lg font-black text-navy">Mission（私たちの存在意義）</h3>
              <p className="mb-4 text-lg font-bold text-navy">船の安全を、技術で守る。</p>
              <div className="space-y-3 text-sm leading-8 text-slate-700">
                <p>
                  無線機器などは、海に出る船舶に求められる<strong>義務設備</strong>です。正常に機能しないと、
                  <strong>安全な出港・航行に支障</strong>が出ます。
                </p>
                <p>
                  当社がお預かりする仕事は、漁業船に限りません。旅客船や<strong>海難対応の現場を支える船舶</strong>
                  まで、幅広いお客様の安全に欠かせない設備を手がけています。
                  <strong>人命を守る使命を担う現場</strong>の装備にまで携わることで、無線・航海計器の仕事は、
                  <strong>社会の安全の土台を支える、社会的意義の大きい仕事</strong>です。
                </p>
                <p>私たちは、どんな状況でも「なんとかする」を諦めない。それがエフアイティの存在意義です。</p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="mb-3 border-b-2 border-orange pb-2 text-lg font-black text-navy">Vision（私たちが目指す姿）</h3>
              <p className="mb-4 text-lg font-bold text-navy">FITがいれば大丈夫、と言われる技術会社であり続ける。</p>
              <p className="text-sm leading-8 text-slate-700">
                静岡県焼津市を拠点に、<strong>無線通信・航海計器</strong>の専門技術を軸に、<strong>全国</strong>の港・船上へ出向きます。積み重ねた経験と誠実な対応で、海の現場から
                <strong>信頼されるパートナー</strong>であり続けます。
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="mb-4 border-b-2 border-orange pb-2 text-lg font-black text-navy">Values（私たちが大切にすること）</h3>
              <div className="space-y-3">
                <div className="rounded-lg border-l-4 border-navy bg-slate-50 p-4">
                  <p className="font-bold text-navy">1. やり切る</p>
                  <p className="mt-1 text-sm leading-7 text-slate-700">どんな状況でも途中で投げ出さない。最後まで責任を持ってやり遂げる。</p>
                </div>
                <div className="rounded-lg border-l-4 border-navy bg-slate-50 p-4">
                  <p className="font-bold text-navy">2. 誠実に、まっすぐに</p>
                  <p className="mt-1 text-sm leading-7 text-slate-700">お客様にも仲間にも、真面目に、正直に向き合う。</p>
                </div>
                <div className="rounded-lg border-l-4 border-navy bg-slate-50 p-4">
                  <p className="font-bold text-navy">3. 現場の和を大切にする</p>
                  <p className="mt-1 text-sm leading-7 text-slate-700">
                    周りと連携し、チームで仕事をやり遂げる。それがエフアイティの流儀です。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-slate-200 bg-white p-7 text-center">
            <h3 className="mb-3 section-title text-center text-2xl">
              <span className="section-title-en">RECRUIT</span>
              採用情報
            </h3>
            <p className="text-sm leading-8 text-slate-700">
              募集職種、働く魅力、応募方法は<strong>採用情報ページ</strong>にまとめています。まずはこちらをご覧ください。
            </p>
            <p className="mt-5">
              <a
                href="https://recruit.fit-ec.jp"
                className="inline-block rounded-md bg-orange px-7 py-3 text-sm font-bold text-white transition hover:bg-orange/90"
                target="_blank"
                rel="noreferrer"
              >
                採用情報を見る
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" id="profile">
        <div className="site-container max-w-5xl">
          <Reveal>
            <h2 className="section-title mb-10 text-center">
              <span className="section-title-en">PROFILE</span>
              会社情報
            </h2>
          </Reveal>

          <div className="space-y-4">
            {profileRows.map(([key, value]) => (
              <article key={key} className="grid gap-2 rounded-xl border border-slate-200 bg-white p-5 sm:grid-cols-[220px_1fr] sm:items-start">
                <h3 className="font-bold text-navy">{key}</h3>
                {key === "電話" ? (
                  <p className="text-sm leading-8 text-slate-700">
                    <a href="tel:054-628-6378" className="font-bold text-orange">
                      054-628-6378
                    </a>
                  </p>
                ) : key === "FAX" ? (
                  <p className="text-sm leading-8 text-slate-700">
                    <a href="tel:054-628-6379" className="font-bold text-orange">
                      054-628-6379
                    </a>
                  </p>
                ) : key === "メール" ? (
                  <p className="text-sm leading-8 text-slate-700">
                    <a href="mailto:toyo@fit-ec.com" className="font-bold text-orange">
                      toyo@fit-ec.com
                    </a>
                  </p>
                ) : key === "事業内容" ? (
                  <p className="text-sm leading-8 text-slate-700">
                    船舶通信機器・航海計器の保守点検、修理、設置工事、出張対応（対応エリアは全国）など（詳細は
                    <a href="/service" className="font-bold text-orange">
                      業務内容
                    </a>
                    ）
                  </p>
                ) : key === "お問い合わせ" ? (
                  <p className="text-sm leading-8 text-slate-700">
                    業務のご相談は <a href="/#contact" className="font-bold text-orange">お問い合わせ</a> または上記電話・メールにて。
                  </p>
                ) : (
                  <p className="whitespace-pre-line text-sm leading-8 text-slate-700">{value}</p>
                )}
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-8 text-slate-600">※表内の数値・連絡先は、社長確認のうえ随時更新します。</p>
        </div>
      </section>

      <section className="bg-slate-100 py-20" id="access">
        <div className="site-container max-w-5xl">
          <Reveal>
            <h2 className="section-title mb-10 text-center">
              <span className="section-title-en">ACCESS</span>
              アクセス
            </h2>
          </Reveal>

          <div className="mx-auto mb-8 max-w-3xl">
            <p className="mb-4 text-base font-bold text-navy">〒425-0021　静岡県焼津市中港2丁目2−15</p>
            <ul className="space-y-2 text-sm leading-8 text-slate-700">
              <li>
                <strong>電車</strong>：最寄り駅は<strong>JR焼津駅</strong>。南口より<strong>徒歩約10分</strong>です。
              </li>
              <li>
                <strong>自動車</strong>：<strong>東名高速 焼津インターチェンジ</strong>より<strong>約10分</strong>です。
              </li>
              <li>
                <strong>駐車場</strong>：完備しております。お車でもお越しいただけます。
              </li>
            </ul>
          </div>

          <div className="relative mx-auto aspect-[4/3] max-w-4xl overflow-hidden rounded-xl border border-slate-200 bg-white" aria-label="所在地の地図">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.416268091352!2d138.323464!3d34.87089199999999!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a4606ae0a212d%3A0x9ed8616f7ac6ebbc!2z77yI5pyJ77yJ44Ko44OV44Ki44Kk44OG44Kj!5e0!3m2!1sja!2sjp!4v1776669147041!5m2!1sja!2sjp"
              title="有限会社エフアイティの地図"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}
