---
sidebarDepth: 1
---

# Guide

## What is Gigantes?

It is a scraping framework that allows you to specify the DOM and declaratively describe the information to be extracted.

## Install

```bash
npm install gigantes
```

## Basic usage

Get information by combining DomSelector and ExtractFunction.

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
