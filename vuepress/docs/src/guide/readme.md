---
sidebarDepth: 1
---

# ガイド

## Gigantes とは？

DOM の指定、抽出する情報を宣言的に記述できるスクレイピングフレームワークです。

## インストール

```bash
npm install gigantes
```

## 基本的な使い方

DomSelector と ExtractFunction を組み合わせて情報を取得します。

```typescript
const h1Selector = domSelector({
  tagName: { eq: "h1" },
}).first();

const h1Text = h1Selector.extract((domNode) => domNode.text);

const result = run("https://xxxxx.xxx").extractBody({
  h1Text: h1Text,
});

console.log(result); // { h1Text: 'Gigantes' }
```
