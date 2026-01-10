# SNS Memo

Vue.jsで作成されたSNS風のメモアプリケーションです。Twitterのようなデザインで、気軽にメモを投稿・管理できます。

![SNS Memo アプリのスクリーンショット](https://github.com/user-attachments/assets/c64d186f-4a46-47ec-a7b4-bbff64adf1b8)

## 特徴

- 🎨 **Twitter風のUI** - 親しみやすいSNSライクなデザイン
- 💾 **ローカル保存** - LocalStorageを使用してメモをブラウザに永続化
- ❤️ **いいね機能** - お気に入りのメモにいいねを付けられる
- 🗑️ **削除機能** - 不要なメモを簡単に削除
- 📱 **レスポンシブ対応** - モバイルデバイスでも快適に使用可能
- ⚡ **高速** - Viteによる高速な開発体験とビルド

## 技術スタック

- **Vue.js 3** - プログレッシブJavaScriptフレームワーク
- **Vite** - 次世代フロントエンドツール
- **LocalStorage API** - ブラウザローカルストレージ
- **CSS3** - モダンなスタイリング

## セットアップ

### 必要要件

- Node.js 18.x 以上
- npm 9.x 以上

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/keigo-hisazumi/sns-memo.git
cd sns-memo

# 依存関係をインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開いてアプリケーションにアクセスできます。

### プロダクションビルド

```bash
npm run build
```

ビルドされたファイルは `dist` ディレクトリに出力されます。

### ビルドのプレビュー

```bash
npm run preview
```

## 使い方

1. **メモの投稿**: 上部のテキストエリアにメモを入力し、「投稿」ボタンをクリック
2. **いいね**: ハートアイコンをクリックしてメモにいいねを追加
3. **削除**: ゴミ箱アイコンをクリックしてメモを削除

メモはブラウザのLocalStorageに保存されるため、ページをリロードしても保持されます。

## プロジェクト構造

```
sns-memo/
├── index.html              # エントリーポイント
├── package.json            # プロジェクト設定
├── vite.config.js          # Vite設定
├── src/
│   ├── main.js            # アプリケーションエントリー
│   ├── App.vue            # ルートコンポーネント
│   ├── style.css          # グローバルスタイル
│   ├── components/        # Vueコンポーネント
│   │   ├── MemoForm.vue   # メモ投稿フォーム
│   │   ├── MemoCard.vue   # 個別メモカード
│   │   └── MemoList.vue   # メモ一覧
│   └── composables/       # コンポーザブル
│       └── useMemos.js    # メモ管理ロジック
└── dist/                  # ビルド出力（生成される）
```

## 今後の拡張予定

- [ ] メモの編集機能
- [ ] タグやカテゴリー機能
- [ ] 検索・フィルター機能
- [ ] エクスポート/インポート機能
- [ ] PWA対応（オフライン動作）
- [ ] Capacitorを使用したiOS/Androidアプリ化

## ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 貢献

プルリクエストを歓迎します。大きな変更の場合は、まずissueを開いて変更内容を議論してください。