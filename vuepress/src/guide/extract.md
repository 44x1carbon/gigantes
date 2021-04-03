---
sidebarDepth: 1
---

# 情報を抽出する

## 単一の情報を抽出する

extract メソッドを利用する事で単一の情報を抽出する事ができます。

```typescript
const h1Selector = domSelector({
  tagName: { eq: "h1" },
}).first();

const h1Text = h1FirstSelector.extract((domNode) => domNode.text);

const result = run("https://xxxxx.xxx").extractBody({
  h1Text: h1Text,
});

console.log(result); // { h1Text: 'Hoge' }
```

## 複数の情報をオブジェクト形式で抽出する

extractObject メソッドを利用する事で複数の情報をオブジェクト形式で抽出する事ができます。

```typescript
const h1Selector = domSelector({
  tagName: { eq: "h1" },
}).first();

const result = run("https://xxxxx.xxx").extractBody({
  h1Text: h1Selector.extractObject({
    tagName: (domNode) => domNode.tagName,
    text: (domNode) => domNode.text,
  }),
});

console.log(result); // { h1Text: { tagName: "h1", text: "Hoge" } }
```

## DomNode から取得できる情報

DomNode から取得できる情報は以下の通りです。

| プロパティ名・メソッド名 | 戻り値                                         |                                       |
| :----------------------- | :--------------------------------------------- | :------------------------------------ |
| text                     | string                                         | 要素のテキストを返します              |
| tagName                  | string                                         | 要素のタグ名を返します                |
| classNames               | string[]                                       | 要素のクラス名を配列で返します        |
| cheerio                  | [Cheerio](https://cheerio.js.org/Cheerio.html) | 要素の Cheerio オブジェクトを返します |
| attr(attributeKey)       | string                                         | 要素の属性の値を返します              |
| css(propertyName)        | string                                         | 要素の CSS の値を返します             |
