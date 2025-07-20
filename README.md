# 営業管理ダッシュボード

Next.js + TypeScript + Supabaseを使用した営業チーム向けの架電管理アプリケーションです。

## 機能概要

- **ダッシュボード**: 企業情報の表示とフィルタリング機能
- **アタックログ**: 架電の詳細な記録とトラッキング
- **認証機能**: Supabase認証による ユーザー管理
- **企業管理**: 企業データベースと連絡先情報の管理

## 技術スタック

### フレームワーク & ランタイム
- **Next.js** (latest) - App Routerを使用
- **React 19** - UIライブラリ
- **TypeScript 5** - 型安全性
- **Node.js** - ランタイム環境

### スタイリング & UI
- **Tailwind CSS** - ユーティリティファーストCSSフレームワーク
- **Mantine** - Reactコンポーネントライブラリ
- **Radix UI** - ヘッドレスUIプリミティブ
- **Shadcn/ui** - コンポーネントシステム
- **Lucide React** - アイコンライブラリ

### バックエンド & データベース
- **Supabase** - Backend-as-a-Service

### 開発ツール
- **Biome** - リンター・フォーマッター
- **Turbopack** - 高速バンドラー

## 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build
npm run start

# コード品質チェック
npx @biomejs/biome check
npx @biomejs/biome format
```

## プロジェクト構造

```
app/
├── layout.tsx              # ルートレイアウト
├── page.tsx                # ホームページ
├── auth/                   # 認証ページ
├── dashboard/              # ダッシュボード機能
└── attacklog/              # 架電ログ機能

components/
├── ui/                     # 基本UIコンポーネント
└── [機能別コンポーネント]

lib/
├── supabase/              # Supabase設定
└── utils.ts               # ユーティリティ関数
```

## 変更履歴

### 2025-01-20
- `app/attacklog/company-info.tsx`: コメントを削除し、コードの可読性を向上
  - `truncateText`関数のコメントを削除
  - 関数の動作に変更はなし