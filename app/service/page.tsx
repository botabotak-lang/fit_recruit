import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { EquipmentSlider } from "@/components/EquipmentSlider";

export const metadata: Metadata = {
  title: "業務内容｜有限会社エフアイティ｜船舶通信機器・航海計器の保守メンテナンス",
  description:
    "船舶通信機器・航海計器・漁労機器の保守点検、修理、設置、全国への出張対応。本社・静岡県焼津市の有限会社エフアイティの業務内容です。",
};

const whenCards = [
  {
    label: "トラブル・異常",
    text: "突然の不具合、警報・表示の異常、航行・操業中に気になるサインが出たとき。",
  },
  {
    label: "定期・法令対応",
    text: "定期点検の時期、検査・法令・船級に関わる整備の準備をしたいとき。",
  },
  {
    label: "新規・更新",
    text: "機器の新規設置、入れ替え、増設やアンテナ・配線まわりの工事を検討しているとき。",
  },
  {
    label: "相談・確認",
    text: "メーカー・機種の可否、状態の軽い確認、運用の聞き取りだけでも構いません。",
  },
];

const equipments = [
  {
    id: "radio",
    title: "船舶通信機器",
    lead: "運航に不可欠な通信系の保守・修理・設置。",
    images: [
      { src: "/images/equip-radio-vhf.webp", alt: "VHF無線機", width: 768, height: 576 },
      { src: "/images/equip-radio-mfhf.webp", alt: "MF/HF無線装置", width: 768, height: 576 },
      { src: "/images/equip-radio-inmarsat.webp", alt: "インマルサット", width: 1536, height: 1150 },
    ],
    items: ["VHF/DSC、衛星通信、内線・拡声など", "定期点検、故障対応、交換・新規設置", "メーカー・機種に応じた技術対応"],
  },
  {
    id: "navigation",
    title: "航海計器",
    lead: "安全航行を支える計測・表示系のメンテナンス。",
    images: [
      { src: "/images/equip-nav-radar.jpg", alt: "レーダー装置", width: 768, height: 954 },
      { src: "/images/equip-nav-ecdis.jpg", alt: "ECDIS（電子海図表示装置）", width: 768, height: 1024 },
      { src: "/images/equip-nav-vdr.jpg", alt: "VDR（航海情報記録装置）", width: 768, height: 513 },
    ],
    items: ["GPS、レーダー、AIS等", "調整・試運転、不具合時の現地対応", "法令・実務に沿った取り扱い"],
  },
  {
    id: "fishing-gear",
    title: "漁労機器",
    lead: "漁業現場の生産性と安全に直結する機器のサポート。",
    images: [
      { src: "/images/equip-fishing-fishfinder.jpg", alt: "魚群探知機", width: 768, height: 576 },
      { src: "/images/equip-fishing-sonar.jpg", alt: "潮流計", width: 768, height: 576 },
      { src: "/images/equip-fishing-fishfinder2.jpg", alt: "魚群探知機（別機種）", width: 768, height: 576 },
    ],
    items: ["魚群探知機、測深機など", "船上での点検・修理・設置", "操業に合わせたスケジュール調整"],
  },
];

export default function ServicePage() {
  return (
    <>
      <section className="relative overflow-hidden py-24 text-white">
        <Image src="/images/fv_hero.png" alt="SERVICEページヒーロー背景" width={2752} height={1536} className="absolute inset-0 h-full w-full object-cover" priority />
        <div className="page-hero-overlay absolute inset-0" aria-hidden="true" />
        <div className="site-container relative z-10 text-center">
          <p className="mb-2 font-display text-sm uppercase tracking-[0.22em] text-orange">SERVICE</p>
          <h1 className="text-fluid-xl font-black">業務内容</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-white/90 sm:text-base">
            船舶通信機器・航海計器・漁労機器を中心に、現場での保守から設置まで一貫してお引き受けします。
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-orange px-7 py-3 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange/90"
            >
              お問い合わせ・ご相談
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20" id="when">
        <div className="site-container max-w-5xl">
          <Reveal>
            <h2 className="section-title mb-10 text-center">
              <span className="section-title-en">WHEN</span>
              こんなときにご相談ください
            </h2>
          </Reveal>
          <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-8 text-slate-700">
            機器の種類を問わず、まずはお電話で状況をお聞かせください。出張の要否や対応可否を含め、正直にお伝えします。
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {whenCards.map((card, index) => (
              <Reveal key={card.label} delay={index * 0.08}>
                <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <p className="mb-2 text-sm font-black tracking-[0.04em] text-orange">{card.label}</p>
                  <p className="text-sm leading-8 text-slate-700">{card.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20" id="equipment">
        <div className="site-container">
          <Reveal>
            <h2 className="section-title mb-10 text-center">
              <span className="section-title-en">EQUIPMENT</span>
              対応機器
            </h2>
          </Reveal>
          <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-8 text-slate-700">
            扱える機種・メーカーはお問い合わせください。代表的な領域は次のとおりです。
          </p>
          <div className="grid gap-6 lg:grid-cols-3">
            {equipments.map((equip, index) => (
              <Reveal key={equip.id} delay={index * 0.08}>
                <article className="h-full overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <EquipmentSlider images={equip.images} title={equip.title} />
                  <div className="p-6">
                    <h3 className="mb-3 border-b-2 border-orange pb-2 text-xl font-black text-navy">{equip.title}</h3>
                    <p className="mb-3 text-sm leading-7 text-slate-600">{equip.lead}</p>
                    <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
                      {equip.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="flow">
        <div className="site-container max-w-5xl">
          <Reveal>
            <h2 className="section-title mb-10 text-center">
              <span className="section-title-en">FLOW</span>
              作業の流れ
            </h2>
          </Reveal>
          <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-8 text-slate-700">
            お急ぎのご相談にも、可能な範囲で柔軟に対応します。
          </p>
          <ol className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            {[
              ["ご相談", "お電話にて状況・機種・場所をお聞きし、初動の目安をお伝えします。"],
              ["現地確認・お見積り", "必要に応じて現場へ伺い、実機を確認のうえお見積り・日程をご提案します。"],
              ["作業", "保守・修理・設置・調整など、ご依頼内容に沿って作業を行います。"],
              ["動作確認・ご説明", "試運転と動作確認のうえ、運用上の注意点など必要な説明を行います。"],
            ].map(([title, body], index) => (
              <li key={title} className="flex gap-4 border-b border-slate-200 p-5 last:border-b-0">
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-orange font-display text-lg text-white"
                >
                  {index + 1}
                </span>
                <div>
                  <p className="font-black text-navy">{title}</p>
                  <p className="mt-1 text-sm leading-8 text-slate-700">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-slate-100 py-20" id="onsite">
        <div className="site-container max-w-5xl">
          <Reveal>
            <h2 className="section-title mb-10 text-center">
              <span className="section-title-en">AREA</span>
              出張対応・対応エリア
            </h2>
          </Reveal>
          <ul className="list-disc space-y-2 pl-6 text-sm leading-8 text-slate-700">
            <li>港・岸壁、船上など、お客様の現場へ出張して作業いたします。</li>
            <li>
              <strong>対応エリアは全国</strong>（本社・拠点は静岡県焼津市）。
            </li>
            <li>スケジュールは現場の操業状況に合わせて調整します。</li>
          </ul>
          <p className="mt-5 text-sm leading-8 text-slate-600">※扱える機種・メーカー、日程・条件の詳細は、お電話にてお問い合わせください。</p>
        </div>
      </section>

      <section className="bg-navy py-14 text-center text-white">
        <div className="site-container">
          <p className="text-sm leading-8 text-white/90">ご相談・お見積りは、お電話またはお問い合わせ先よりお気軽にご連絡ください。</p>
          <p className="mt-5">
            <Link href="/#contact" className="inline-block rounded-md bg-orange px-7 py-3 text-sm font-bold text-white transition hover:bg-orange/90">
              お問い合わせ・連絡先を見る
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
