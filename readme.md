# Gigantes

It is a scraping framework that allows you to specify the DOM and declaratively describe the information to be extracted.

## Installation

```
npm install gigantes
```

## Documentation

## Usage

visit [https://44x1carbon.github.io/gigantes/](https://44x1carbon.github.io/gigantes/)

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
