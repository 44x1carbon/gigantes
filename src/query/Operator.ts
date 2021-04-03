import { DomNode } from "../DomNode";

export interface Operator {
  invoke(domNode: DomNode): boolean;
  addOperator(operator: Operator): void;
}

export class SingleOperator implements Operator {
  operator: Operator;

  invoke(domNode: DomNode): boolean {
    throw new Error("Method not implemented.");
  }
  addOperator(operator: Operator): void {
    this.operator = operator;
  }
}

export class SetOperator implements Operator {
  operators: Operator[] = [];

  invoke(domNode: DomNode): boolean {
    throw new Error("Method not implemented.");
  }

  addOperator(operator: Operator): void {
    this.operators.push(operator);
  }
}

export class AndOperator extends SetOperator {
  invoke(domNode: DomNode): boolean {
    return this.operators.every((operator) => operator.invoke(domNode));
  }
}

export class OrOperator extends SetOperator {
  invoke(domNode: DomNode): boolean {
    return this.operators.some((operator) => operator.invoke(domNode));
  }
}

export class EqOperator implements Operator {
  attributeKey: string;
  value: string;

  constructor(attributeKey: string, value: string) {
    this.attributeKey = attributeKey;
    this.value = value;
  }
  invoke(domNode: DomNode): boolean {
    if (!domNode) {
      return false;
    }
    switch (this.attributeKey) {
      case "class":
        return domNode.classNames.includes(this.value);
      case "text":
        return domNode.text === this.value;
      case "tagName":
        return domNode.tagName === this.value;
      default: {
        return (
          domNode.css(this.attributeKey) === this.value ||
          domNode.attr(this.attributeKey) === this.value
        );
      }
    }
  }

  addOperator(operator: Operator): void {
    throw new Error("Method not implemented.");
  }
}

export class NEqOperator implements Operator {
  attributeKey: string;
  value: string;

  constructor(attributeKey: string, value: string) {
    this.attributeKey = attributeKey;
    this.value = value;
  }
  invoke(domNode: DomNode): boolean {
    return !new EqOperator(this.attributeKey, this.value).invoke(domNode);
  }

  addOperator(operator: Operator): void {
    throw new Error("Method not implemented.");
  }
}

export class LikeOperator implements Operator {
  attributeKey: string;
  value: string;

  constructor(attributeKey: string, value: string) {
    this.attributeKey = attributeKey;
    this.value = value;
  }
  invoke(domNode: DomNode): boolean {
    switch (this.attributeKey) {
      case "class":
        return domNode.classNames.some((className) =>
          className.includes(this.value)
        );
      case "text":
        return domNode.text.includes(this.value);
      case "tagName":
        return domNode.tagName.includes(this.value);
      default: {
        return (
          domNode.css(this.attributeKey).includes(this.value) ||
          domNode.attr(this.attributeKey).includes(this.value)
        );
      }
    }
  }

  addOperator(operator: Operator): void {
    throw new Error("Method not implemented.");
  }
}

export class NLikeOperator implements Operator {
  attributeKey: string;
  value: string;

  constructor(attributeKey: string, value: string) {
    this.attributeKey = attributeKey;
    this.value = value;
  }
  invoke(domNode: DomNode): boolean {
    return !new LikeOperator(this.attributeKey, this.value).invoke(domNode);
  }

  addOperator(operator: Operator): void {
    throw new Error("Method not implemented.");
  }
}

export class InOperator implements Operator {
  attributeKey: string;
  values: string[];

  constructor(attributeKey: string, values: string[]) {
    this.attributeKey = attributeKey;
    this.values = values;
  }

  invoke(domNode: DomNode): boolean {
    switch (this.attributeKey) {
      case "class":
        return domNode.classNames.some((className) =>
          this.values.includes(className)
        );
      case "text":
        return this.values.includes(domNode.text);
      case "tagName":
        return this.values.includes(domNode.tagName);
      default: {
        return (
          this.values.includes(domNode.css(this.attributeKey)) ||
          this.values.includes(domNode.attr(this.attributeKey))
        );
      }
    }
  }

  addOperator(operator: Operator): void {
    throw new Error("Method not implemented.");
  }
}

export class NInOperator implements Operator {
  attributeKey: string;
  values: string[];

  constructor(attributeKey: string, values: string[]) {
    this.attributeKey = attributeKey;
    this.values = values;
  }
  invoke(domNode: DomNode): boolean {
    return !new InOperator(this.attributeKey, this.values).invoke(domNode);
  }

  addOperator(operator: Operator): void {
    throw new Error("Method not implemented.");
  }
}
