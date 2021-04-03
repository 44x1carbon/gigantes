import { digNode, nextAll } from "../DigNode";
import { DomNode } from "../DomNode";
import { ExtractOption, extract } from "../extract/ExtractOption";
import { LoggerFactory } from "../util/logger/LoggerFactory";
import {
  NestArray,
  DecrementNest,
  IncrementNest,
  nestMap,
  NestMapType,
} from "../NestArray";
import { SingleDomSelector } from "./SingleDomSelector";
import { SelectQuery, convertWhereQueryToOperator } from "../query/WhereQuery";
import {
  TakeFunction,
  TakeFunctionReturnType,
  takeAll,
  first,
  nth,
  skipAndTake,
  skip,
  take,
} from "./TakeFunction";
import { IdentityDomSelector } from "./IdentityDomSelector";

const log = LoggerFactory.create("ListElementSpec");

export class MultipleDomSelector<S extends NestArray<DomNode>> {
  whereQuery: SelectQuery;
  parentElementSpec:
    | MultipleDomSelector<DecrementNest<DomNode, S>>
    | SingleDomSelector
    | IdentityDomSelector;
  prevElementSpec:
    | MultipleDomSelector<DecrementNest<DomNode, S>>
    | SingleDomSelector
    | IdentityDomSelector;
  takeFn: TakeFunction<TakeFunctionReturnType> = takeAll();

  constructor(whereQuery: SelectQuery) {
    this.whereQuery = whereQuery;
  }

  first(): MultipleDomSelector<S> {
    const elementSpec = new MultipleDomSelector<S>(this.whereQuery);
    elementSpec.takeFn = first();
    return elementSpec;
  }

  nth(n: number): MultipleDomSelector<S> {
    const elementSpec = new MultipleDomSelector<S>(this.whereQuery);
    elementSpec.takeFn = nth(n);
    return elementSpec;
  }

  takeAll(): MultipleDomSelector<IncrementNest<DomNode, S>> {
    const elementSpec = new MultipleDomSelector<IncrementNest<DomNode, S>>(
      this.whereQuery
    );
    elementSpec.takeFn = takeAll();
    return elementSpec;
  }

  skipAndTake(
    n: number,
    skip: number
  ): MultipleDomSelector<IncrementNest<DomNode, S>> {
    const elementSpec = new MultipleDomSelector<IncrementNest<DomNode, S>>(
      this.whereQuery
    );
    elementSpec.takeFn = skipAndTake(n, skip);
    return elementSpec;
  }

  skip(n: number): MultipleDomSelector<IncrementNest<DomNode, S>> {
    const elementSpec = new MultipleDomSelector<IncrementNest<DomNode, S>>(
      this.whereQuery
    );
    elementSpec.takeFn = skip(n);
    return elementSpec;
  }

  take(n: number): MultipleDomSelector<IncrementNest<DomNode, S>> {
    const elementSpec = new MultipleDomSelector<IncrementNest<DomNode, S>>(
      this.whereQuery
    );
    elementSpec.takeFn = take(n);
    return elementSpec;
  }

  select(
    selectFn: TakeFunction<DomNode[]>
  ): MultipleDomSelector<IncrementNest<DomNode, S>> {
    const elementSpec = new MultipleDomSelector<IncrementNest<DomNode, S>>(
      this.whereQuery
    );
    elementSpec.takeFn = selectFn;
    return elementSpec;
  }

  child(
    whereQuery: SelectQuery
  ): MultipleDomSelector<IncrementNest<DomNode, S>> {
    const elementSpec = new MultipleDomSelector<IncrementNest<DomNode, S>>(
      whereQuery
    );
    elementSpec.parentElementSpec = (this as unknown) as MultipleDomSelector<
      DecrementNest<DomNode, S>
    >;
    return elementSpec;
  }

  next(
    whereQuery: SelectQuery
  ): MultipleDomSelector<IncrementNest<DomNode, S>> {
    const elementSpec = new MultipleDomSelector<IncrementNest<DomNode, S>>(
      whereQuery
    );
    elementSpec.prevElementSpec = (this as unknown) as MultipleDomSelector<
      DecrementNest<DomNode, S>
    >;
    return elementSpec;
  }

  getDomNode(): (body: DomNode) => NestArray<TakeFunctionReturnType> {
    if (this.parentElementSpec) {
      return (body: DomNode) => {
        log.debug(
          "has parent",
          "parent: " +
            JSON.stringify(this.parentElementSpec.whereQuery) +
            " " +
            this.parentElementSpec.takeFn,
          "current: " + JSON.stringify(this.whereQuery) + " " + this.takeFn
        );

        log.debug(
          nestMap(
            this.parentElementSpec.getDomNode().call({}, body),
            (domNode: DomNode) => ({
              text: domNode.text.slice(0, 20),
              classNames: domNode.classNames,
              tagName: domNode.tagName,
            })
          )
        );

        return nestMap(
          this.parentElementSpec.getDomNode().call({}, body),
          (domNode: DomNode) => {
            const domNodeList = digNode(
              domNode,
              convertWhereQueryToOperator(this.whereQuery)
            );

            if (domNodeList.length == 0) {
              throw new Error(
                "domNode not found \n" +
                  JSON.stringify(this.whereQuery, null, 2)
              );
            }

            return this.takeFn(domNodeList);
          }
        );
      };
    }

    if (this.prevElementSpec) {
      return (body: DomNode) => {
        log.debug(
          "has prev",
          "prev: " +
            JSON.stringify(this.prevElementSpec.whereQuery) +
            " " +
            this.prevElementSpec.takeFn,
          "current: " + JSON.stringify(this.whereQuery) + " " + this.takeFn
        );

        log.debug(
          nestMap(
            this.prevElementSpec.getDomNode().call({}, body),
            (domNode: DomNode) => ({
              text: domNode.text.slice(0, 20),
              classNames: domNode.classNames,
              tagName: domNode.tagName,
            })
          )
        );

        return nestMap(
          this.prevElementSpec.getDomNode().call({}, body),
          (domNode: DomNode) => {
            const domNodeList = nextAll(
              domNode,
              convertWhereQueryToOperator(this.whereQuery)
            );

            if (domNodeList.length == 0) {
              throw new Error(
                "domNode not found \n" +
                  JSON.stringify(this.whereQuery, null, 2)
              );
            }

            return this.takeFn(domNodeList);
          }
        );
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
          "domNode not found \n" + JSON.stringify(this.whereQuery, null, 2)
        );
      }

      return this.takeFn(domNodeList);
    };
  }

  extract<T>(
    fn: (domNode: DomNode) => T,
    defaultValue?: T
  ): (parent: DomNode) => NestMapType<DomNode, S, T> {
    return (body: DomNode) => {
      try {
        return nestMap(this.getDomNode().call({}, body), fn);
      } catch (e) {
        console.error(e);
        return defaultValue;
      }
    };
  }

  // FIXME 名前を変えたい
  /**
   *
   * @param fn
   * @returns
   */
  extractObjectWithSpec<T>(
    fn: (spec: IdentityDomSelector) => ExtractOption<T>
  ): (parent: DomNode) => NestMapType<DomNode, S, T> {
    return (body: DomNode) => {
      try {
        return nestMap(this.getDomNode().call({}, body), (domNode: DomNode) =>
          extract(fn(new IdentityDomSelector(domNode)), domNode)
        );
      } catch (e) {
        console.error(e);
        return null;
      }
    };
  }

  extractObject<T>(
    option: ExtractOption<T>
  ): (parent: DomNode) => NestMapType<DomNode, S, T> {
    return (body: DomNode) => {
      try {
        return nestMap(this.getDomNode().call({}, body), (domNode: DomNode) =>
          extract(option, domNode)
        );
      } catch (e) {
        console.error(e);
        return null;
      }
    };
  }
}
