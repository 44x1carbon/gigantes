import { DomNode } from "../DomNode";
import { extract, ExtractOption } from "../extract/ExtractOption";
import { SelectQuery } from "../query/WhereQuery";
import { first, TakeFunction } from "./TakeFunction";
import { SingleDomSelector } from "./SingleDomSelector";

export class IdentityDomSelector {
  private domNode: DomNode;
  whereQuery: SelectQuery = {};
  takeFn: TakeFunction<DomNode> = first();

  constructor(domNode: DomNode) {
    this.domNode = domNode;
  }

  getDomNode(): (body: DomNode) => DomNode {
    return (body: DomNode) => this.domNode;
  }

  child(whereQuery: SelectQuery): SingleDomSelector {
    const elementSpec = new SingleDomSelector(whereQuery);
    elementSpec.parentElementSpec = this;
    return elementSpec;
  }

  next(whereQuery: SelectQuery): SingleDomSelector {
    const elementSpec = new SingleDomSelector(whereQuery);
    elementSpec.prevElementSpec = this;
    return elementSpec;
  }

  extract<T>(
    fn: (domNode: DomNode) => T,
    defaultValue?: T
  ): (parent: DomNode) => T {
    return (body: DomNode) => {
      try {
        return fn(this.getDomNode().call({}, body));
      } catch (e) {
        console.error(e);
        return defaultValue;
      }
    };
  }

  extractObject<T>(option: ExtractOption<T>): (parent: DomNode) => T {
    return (body: DomNode) => {
      try {
        return extract(option, this.getDomNode().call({}, body));
      } catch (e) {
        console.error(e);
        return null;
      }
    };
  }
}
