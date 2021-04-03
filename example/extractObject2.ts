import { domSelector, run } from "../src";

const h1Selector = domSelector({
  tagName: { eq: "h1" },
}).takeAll();

const h1SelectorTagName = h1Selector.extract((domNode) => domNode.tagName);
const h1SelectorText = h1Selector.extract((domNode) => domNode.text);

const result = run("http://localhost:3000/h1").extractBody({
  h1Text: h1Selector.extractObject({
    tagName: h1SelectorTagName,
    text: h1SelectorText,
  }),
});

console.log(result);
