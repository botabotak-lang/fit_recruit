"use client";

import type { Metadata } from "next";
import { useState } from "react";

// ※ metadata はServer Componentでないとエクスポートできないため、
//   title/descriptionはlayout側で上書きする設計にするか、
//   別ファイル（metadata.ts）で管理する。ここではクライアント用フォームのみ。

type FormState = "idle" | "submitting" | "success" | "error";

type FormData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = (await res.json()) as { success?: boolean; error?: string };

      if (!res.ok || !data.success) {
        throw new Error(data.error ?? "送信に失敗しました。");
      }

      setFormState("success");
      setFormData(initialFormData);
    } catch (err) {
      setFormState("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "送信中にエラーが発生しました。時間をおいてもう一度お試しください。"
      );
    }
  };

  const inputBase =
    "w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:border-orange focus:ring-2 focus:ring-orange/20";

  return (
    <>
      {/* ページヒーロー */}
      <section className="relative overflow-hidden py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#243352] to-[#2d4a7a]" />
        <div className="site-container relative z-10 text-center">
          <p className="mb-2 font-display text-sm uppercase tracking-[0.22em] text-orange">
            CONTACT
          </p>
          <h1 className="text-fluid-xl font-black">お問い合わせ</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-white/90 sm:text-base">
            業務のご相談・見積もりのご依頼・その他お気軽にお問い合わせください。
            内容を確認のうえ、担当者よりご連絡いたします。
          </p>
        </div>
      </section>

      {/* フォームセクション */}
      <section className="bg-slate-50 py-20">
        <div className="site-container max-w-3xl">

          {/* 送信完了メッセージ */}
          {formState === "success" ? (
            <div className="rounded-xl border border-green-200 bg-green-50 p-10 text-center shadow-sm">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="mb-3 text-xl font-black text-navy">送信しました</h2>
              <p className="text-sm leading-8 text-slate-600">
                お問い合わせいただきありがとうございます。
                <br />
                内容を確認のうえ、担当者よりご連絡いたします。
                <br />
                <span className="text-slate-500">
                  （返信まで数営業日いただく場合がございます）
                </span>
              </p>
              <button
                type="button"
                onClick={() => setFormState("idle")}
                className="mt-8 inline-block rounded-md border border-navy px-6 py-2.5 text-sm font-bold text-navy transition hover:bg-navy hover:text-white"
              >
                フォームに戻る
              </button>
            </div>
          ) : (
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="mb-8 text-xl font-black text-navy">
                <span className="mr-2 inline-block border-b-2 border-orange pb-1 text-sm font-bold uppercase tracking-widest text-orange">
                  FORM
                </span>
                <br />
                お問い合わせフォーム
              </h2>

              {/* エラーメッセージ */}
              {formState === "error" && errorMessage && (
                <div className="mb-6 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* お名前 */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-bold text-navy"
                  >
                    お名前
                    <span className="ml-2 rounded bg-orange px-1.5 py-0.5 text-xs text-white">
                      必須
                    </span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="山田 太郎"
                    className={inputBase}
                  />
                </div>

                {/* 会社名 */}
                <div>
                  <label
                    htmlFor="company"
                    className="mb-1.5 block text-sm font-bold text-navy"
                  >
                    会社名
                    <span className="ml-2 rounded bg-slate-200 px-1.5 py-0.5 text-xs text-slate-600">
                      任意
                    </span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="株式会社〇〇"
                    className={inputBase}
                  />
                </div>

                {/* メールアドレス */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-bold text-navy"
                  >
                    メールアドレス
                    <span className="ml-2 rounded bg-orange px-1.5 py-0.5 text-xs text-white">
                      必須
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@example.com"
                    className={inputBase}
                  />
                </div>

                {/* 電話番号 */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-sm font-bold text-navy"
                  >
                    電話番号
                    <span className="ml-2 rounded bg-slate-200 px-1.5 py-0.5 text-xs text-slate-600">
                      任意
                    </span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="054-628-0000"
                    className={inputBase}
                  />
                </div>

                {/* お問い合わせ内容 */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-bold text-navy"
                  >
                    お問い合わせ内容
                    <span className="ml-2 rounded bg-orange px-1.5 py-0.5 text-xs text-white">
                      必須
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    placeholder="ご相談・ご依頼の内容をご記入ください。"
                    className={`${inputBase} resize-y`}
                  />
                </div>

                {/* 送信ボタン */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full rounded-md bg-orange px-6 py-4 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange/90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {formState === "submitting" ? "送信中..." : "送信する"}
                  </button>
                </div>

                <p className="text-center text-xs text-slate-500">
                  送信いただいた内容は、お問い合わせへの返答にのみ利用いたします。
                </p>
              </form>
            </div>
          )}

          {/* 代替連絡先 */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-orange">
                PHONE
              </p>
              <p className="mb-1 font-bold text-navy">お電話でのお問い合わせ</p>
              <a
                href="tel:054-628-6378"
                className="text-xl font-black text-navy transition hover:text-orange"
              >
                054-628-6378
              </a>
              <p className="mt-2 text-xs text-slate-500">
                受付時間：平日 8:00〜17:00
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-orange">
                MAIL
              </p>
              <p className="mb-1 font-bold text-navy">メールでのお問い合わせ</p>
              <a
                href="mailto:toyo@fit-ec.com"
                className="text-base font-bold text-orange transition hover:underline"
              >
                toyo@fit-ec.com
              </a>
              <p className="mt-2 text-xs text-slate-500">
                24時間受付（返信は営業日）
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
