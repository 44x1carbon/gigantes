---
home: true
tagline: DOM の指定、抽出する情報を宣言的に記述できるスクレイピングフレームワーク
actionText: Quick Start →
actionLink: /guide/
footer: Made by @44x1carbon
---

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

Inspire: [ayakashi](https://ayakashi.io/)
