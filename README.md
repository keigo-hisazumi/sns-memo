# SNS Memo

Twitter 風のデザインで気軽にメモを投稿・管理できる SNS 風メモアプリです。メールアドレスでログインすると、メモとプロフィールが Firebase（Firestore）に保存されます。

公開 URL: <https://keigo-hisazumi.github.io/sns-memo/>

![SNS Memo アプリのスクリーンショット](https://github.com/user-attachments/assets/c64d186f-4a46-47ec-a7b4-bbff64adf1b8)

## 主な機能

- メールアドレス / パスワードによるユーザー登録とログイン
- 280 文字までのメモの投稿（文字数カウンター付き）
- メモの編集・削除（削除するとそのメモへのリプライもまとめて削除）
- メモへのリプライ（スレッド表示）
- いいね
- ピン留め（ピン留めしたメモをタイムラインの先頭に表示）
- メモの内容のキーワード検索
- プロフィールの表示と編集（名前・ユーザー ID・自己紹介・アイコンカラー）
- ダークモード / ライトモードの切り替え（初回は OS の設定に従う）
- モバイルにも対応したレスポンシブデザイン

## 使い方

1. メールアドレスとパスワード（6 文字以上）で新規登録またはログインする
2. ホームの「今何してる？」欄にメモを入力して投稿する
3. 各メモのアイコンから、リプライ・いいね・ピン留め・編集・削除を行う
4. ナビゲーションの「検索」でメモの内容を検索し、「プロフィール」でプロフィールの確認と編集を行う
5. 右上のボタンからログアウトする

メモとプロフィールは Firestore に保存されるため、ページをリロードしたり別の端末からログインしたりしても保持されます。

## 技術スタック

- TypeScript
- React
- Vite
- Firebase（Authentication / Firestore）
- CSS
- ESLint
- GitHub Pages（ホスティング）

## 開発

### 必要な環境

- Node.js 22（CI・デプロイのワークフローと同じバージョン）
- npm

### コマンド

```bash
npm ci               # 依存関係のインストール
npm run dev          # 開発サーバーの起動（http://localhost:3000/sns-memo/）
npm run lint         # ESLint
npm run typecheck    # TypeScript の型チェック
npm run build        # 型チェックと本番ビルド（dist/ に出力）
npm run preview      # ビルド結果のプレビュー
```

## ディレクトリ構成

```text
src/
  main.tsx          エントリーポイント
  App.tsx           画面全体（ホーム・検索・プロフィールの切り替え）
  components/       メモ投稿フォーム・メモカード・一覧・検索・プロフィール・ログインなどのコンポーネント
  context/          認証・メモ・プロフィール・ダークモードの状態管理（React Context）
  firebase.ts       Firebase の初期化
  types.ts          型定義
  style.css         グローバルスタイル
public/             アイコン
index.html          HTML のエントリーポイント
vite.config.ts      Vite の設定（ベースパス・開発サーバーのポート）
```

## デプロイ

- `main` への PR マージ時に `.github/workflows/deploy.yml` が GitHub Pages へデプロイします（Actions の画面から手動実行も可能）
- PR ごとに `.github/workflows/pr-preview.yml` がプレビューを `gh-pages` ブランチの `pr-<番号>/` に公開し、URL と QR コードを PR にコメントします（PR クローズ時に削除）

## 開発ルール

開発ルールは [AGENTS.md](./AGENTS.md) を参照してください。

## ライセンス

MIT
