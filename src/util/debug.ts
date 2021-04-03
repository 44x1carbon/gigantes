import { DomNode } from "../DomNode";

export const toDomNodeInfo = (domNode: DomNode) => {
  return {
    tagName: domNode.tagName,
    classNames: domNode.classNames,
    text: domNode.text,
  };
};
