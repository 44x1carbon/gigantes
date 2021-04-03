import { domSelector, run } from "../src";

const h1Selector = domSelector({
  tagName: { eq: "h1" },
}).first();

const h1Text = h1Selector.extract((domNode) => domNode.text);

const result = run("http://localhost:3000/h1").extractBody({
  h1Text: h1Text,
});

console.log(result);
