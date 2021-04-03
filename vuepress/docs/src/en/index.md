---
home: true
tagline: A scraping framework for specifying the DOM and declaratively describing the information to be extracted.
actionText: Quick Start →
actionLink: /en/guide/
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
