---
sidebarDepth: 1
---

# Extracting information

## Extract a single piece of information

The `extract` method can be used to extract a single piece of information.

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

## Extract multiple pieces of information in object format

By using the `extractObject` method, you can extract multiple pieces of information in object form.

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

## Information that can be retrieved from DomNode

The information you can get from DomNode is as follows

| Property name・Method name | return value                                   |                                                        |
| :------------------------- | :--------------------------------------------- | :----------------------------------------------------- |
| text                       | string                                         | Returns the text of the element                        |
| tagName                    | string                                         | Returns the tag name of an element                     |
| classNames                 | string[]                                       | Returns an array with the class names of the elements. |
| cheerio                    | [Cheerio](https://cheerio.js.org/Cheerio.html) | Returns the Cheerio object of the element.             |
| attr(attributeKey)         | string                                         | Returns the value of an attribute of an element.       |
| css(propertyName)          | string                                         | Returns the CSS value of the element                   |
