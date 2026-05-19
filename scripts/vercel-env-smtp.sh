#!/usr/bin/env bash
# Xserver SMTP を Vercel 本番に登録する（対話式）
# 使い方: cd FIT/apps/fit-hp && bash scripts/vercel-env-smtp.sh

set -euo pipefail
cd "$(dirname "$0")/.."

echo "=== FIT fit-hp: Vercel SMTP 環境変数登録 ==="
echo "Xserver のメール設定（sv***.xserver.jp / 587 / メールアドレス / パスワード）を用意してください。"
echo ""

npx vercel env add SMTP_HOST production
npx vercel env add SMTP_PORT production
npx vercel env add SMTP_USER production
npx vercel env add SMTP_PASS production

echo ""
echo "再デプロイ中..."
npx vercel deploy --prod --yes
echo "完了。https://fit-hp.vercel.app/contact で送信テストしてください。"
