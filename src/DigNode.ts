import { DomNode } from "./DomNode";
import { Operator } from "./query/Operator";

export const digNode = (domNode: DomNode, operator: Operator): DomNode[] => {
  if (!domNode) {
    return [];
  }
  if (operator.invoke(domNode)) {
    return [domNode];
  } else {
    return [].concat(
      ...domNode.children.map((childDomNode) => digNode(childDomNode, operator))
    );
  }
};

export const nextAll = (domNode: DomNode, operator: Operator): DomNode[] => {
  return domNode.nextAll.filter((nextDomNode) => operator.invoke(nextDomNode));
};
