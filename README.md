# vanilla-starter-template

Starter template for vanilla typescript project.

## 依存パッケージ

すべてdevDependencies

- typescript 開発
  - typescript: typescript で書けるようにする
  - tsx: ts ファイルを直接実行できるようにする
- lint・整形
  - eslint: 書式チェック
  - prettier: 整形
  - eslint-config-prettier: eslint と prettier 間のルール差を吸収
  - @typescript-eslint/eslint-plugin: eslint の typescript ルール
  - @typescript-eslint/parser: eslint の typescript パーサ
- test
  - vitest
  - @vitest/coverage-v8

### 依存パッケージのインストール

```bash
npm install -D typescript tsx
npm install -D eslint prettier eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm install -D vitest @vitest/coverage-v8
```

### 設定ファイルの編集

- [tsconfig.json](./tsconfig.json)
  - typescript の build 設定など
  - [こちら](https://typescriptbook.jp/reference/tsconfig/tsconfig.json-settings)のバックエンド向け設定を利用しつつ、`console.log()` を使えるように dom ライブラリを追加
- [.eslintrc.json](./.eslintrc.json)
  - typescript 関連の parser と plugin を指定
  - prettier とのバッティング解消
- [.prettierrc.json](./.prettierrc.json)
  - セミコロンなし、タブ2など
- [vite.config.ts](./vite.config.ts)
  - main をtest対象から除外(モジュールではないため)
