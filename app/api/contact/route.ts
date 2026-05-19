import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, message } = body as {
      name: string;
      company?: string;
      email: string;
      phone?: string;
      message: string;
    };

    // バリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "お名前・メールアドレス・お問い合わせ内容は必須です。" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "メールアドレスの形式が正しくありません。" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailBody = `
有限会社エフアイティ コーポレートサイトよりお問い合わせがありました。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
お名前：${name}
会社名：${company || "（未入力）"}
メールアドレス：${email}
電話番号：${phone || "（未入力）"}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

【お問い合わせ内容】
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
このメールは fit-ec.jp のお問い合わせフォームから自動送信されています。
`.trim();

    await transporter.sendMail({
      from: `"fit-ec.jp お問い合わせフォーム" <${process.env.SMTP_USER}>`,
      to: "toyo@fit-ec.com",
      replyTo: email,
      subject: `【お問い合わせ】${name}様より`,
      text: mailBody,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "送信中にエラーが発生しました。時間をおいてもう一度お試しください。" },
      { status: 500 }
    );
  }
}
