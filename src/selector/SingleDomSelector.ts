import { digNode, nextAll } from "../DigNode";
import { DomNode } from "../DomNode";
import { ExtractOption, extract } from "../extract/ExtractOption";
import { MultipleDomSelector } from "./MultipleDomSelector";
import { LoggerFactory } from "../util/logger/LoggerFactory";
import { NestArray1, nestMap } from "../NestArray";
import { SelectQuery, convertWhereQueryToOperator } from "../query/WhereQuery";
import {
  TakeFunction,
  first,
  nth,
  takeAll,
  skipAndTake,
  skip,
  take,
} from "./TakeFunction";
import { IdentityDomSelector } from "./IdentityDomSelector";
import { toDomNodeInfo } from "../util/debug";

const log = LoggerFactory.create("SingleElementSpec");

export class SingleDomSelector {
  whereQuery: SelectQuery;
  parentElementSpec: SingleDomSelector | IdentityDomSelector;
  prevElementSpec: SingleDomSelector | IdentityDomSelector;
  takeFn: TakeFunction<DomNode> = first();

  constructor(whereQuery: SelectQuery) {
    this.whereQuery = whereQuery;
  }

  first(): SingleDomSelector {
    const elementSpec = new SingleDomSelector(this.whereQuery);
    elementSpec.takeFn = first();
    elementSpec.parentElementSpec = this.parentElementSpec;
    elementSpec.prevElementSpec = this.prevElementSpec;
    return elementSpec;
  }

  nth(n: number): SingleDomSelector {
    const elementSpec = new SingleDomSelector(this.whereQuery);
    elementSpec.takeFn = nth(n);
    elementSpec.parentElementSpec = this.parentElementSpec;
    elementSpec.prevElementSpec = this.prevElementSpec;
    return elementSpec;
  }

  takeAll(): MultipleDomSelector<NestArray1<DomNode>> {
    const elementSpec = new MultipleDomSelector(this.whereQuery);
    elementSpec.parentElementSpec = this.parentElementSpec;
    elementSpec.prevElementSpec = this.prevElementSpec;
    elementSpec.takeFn = takeAll();
    return elementSpec;
  }

  skipAndTake(
    n: number,
    skip: number
  ): MultipleDomSelector<NestArray1<DomNode>> {
    const elementSpec = new MultipleDomSelector(this.whereQuery);
    elementSpec.parentElementSpec = this.parentElementSpec;
    elementSpec.prevElementSpec = this.prevElementSpec;
    elementSpec.takeFn = skipAndTake(n, skip);
    return elementSpec;
  }

  skip(n: number): MultipleDomSelector<NestArray1<DomNode>> {
    const elementSpec = new MultipleDomSelector(this.whereQuery);
    elementSpec.parentElementSpec = this.parentElementSpec;
    elementSpec.prevElementSpec = this.prevElementSpec;
    elementSpec.takeFn = skip(n);
    return elementSpec;
  }

  take(n: number): MultipleDomSelector<NestArray1<DomNode>> {
    const elementSpec = new MultipleDomSelector(this.whereQuery);
    elementSpec.parentElementSpec = this.parentElementSpec;
    elementSpec.prevElementSpec = this.prevElementSpec;
    elementSpec.takeFn = take(n);
    return elementSpec;
  }

  select(
    selectFn: TakeFunction<DomNode[]>
  ): MultipleDomSelector<NestArray1<DomNode>> {
    const elementSpec = new MultipleDomSelector<NestArray1<DomNode>>(
      this.whereQuery
    );
    elementSpec.parentElementSpec = this.parentElementSpec;
    elementSpec.prevElementSpec = this.prevElementSpec;
    elementSpec.takeFn = selectFn;
    return elementSpec;
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

  getDomNode(): (body: DomNode) => DomNode {
    if (this.parentElementSpec) {
      return (body: DomNode) => {
        const domNodeList = digNode(
          this.parentElementSpec.getDomNode().call({}, body),
          convertWhereQueryToOperator(this.whereQuery)
        );

        log.debug(
          "has parent",
          "parent: " +
            JSON.stringify(this.parentElementSpec.whereQuery) +
            " " +
            this.parentElementSpec.takeFn,
          "current: " + JSON.stringify(this.whereQuery) + " " + this.takeFn
        );

        log.debug(
          nestMap(domNodeList, (domNode: DomNode) => ({
            text: domNode.text.slice(0, 20),
            classNames: domNode.classNames,
            tagName: domNode.tagName,
          }))
        );

        if (domNodeList.length == 0) {
          throw new Error(
            "domNode not found \n" + JSON.stringify(this.whereQuery, null, 2)
          );
        }

        return this.takeFn(domNodeList);
      };
    }

    if (this.prevElementSpec) {
      return (body: DomNode) => {
        const domNodeList = nextAll(
          this.prevElementSpec.getDomNode().call({}, body),
          convertWhereQueryToOperator(this.whereQuery)
        );

        log.debug(
          "has prev",
          "parent: " +
            JSON.stringify(this.prevElementSpec.whereQuery) +
            " " +
            this.prevElementSpec.takeFn,
          "current: " + JSON.stringify(this.whereQuery) + " " + this.takeFn
        );

        log.debug(
          nestMap(domNodeList, (domNode: DomNode) => ({
            text: domNode.text.slice(0, 20),
            classNames: domNode.classNames,
            tagName: domNode.tagName,
          }))
        );

        if (domNodeList.length == 0) {
          throw new Error(
            "domNode not found \n" + JSON.stringify(this.whereQuery, null, 2)
          );
        }
        const d = this.takeFn(domNodeList);
        return this.takeFn(domNodeList);
      };
    }

    return (body: DomNode) => {
      const domNodeList = digNode(
        body,
        convertWhereQueryToOperator(this.whereQuery)
      );

      log.debug(
        "current: " + JSON.stringify(this.whereQuery) + " " + this.takeFn
      );

      log.debug(
        nestMap(domNodeList, (domNode: DomNode) => ({
          text: domNode.text.slice(0, 20),
          classNames: domNode.classNames,
          tagName: domNode.tagName,
        }))
      );

      if (domNodeList.length == 0) {
        throw new Error(
          "domNode not found \nquery:" +
            JSON.stringify(this.whereQuery, null, 2) +
            "\nparentNode: " +
            JSON.stringify(toDomNodeInfo(body)) +
            "\nparentNode NextAll:" +
            JSON.stringify(body.nextAll.map(toDomNodeInfo), null, 2)
        );
      }

      return this.takeFn(domNodeList);
    };
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
