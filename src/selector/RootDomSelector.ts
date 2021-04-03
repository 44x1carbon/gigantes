import { DomNode } from "../DomNode";
import { MultipleDomSelector } from "./MultipleDomSelector";
import { NestArray1, NestArray2 } from "../NestArray";
import { SingleDomSelector } from "./SingleDomSelector";
import { SelectQuery } from "../query/WhereQuery";
import { first, nth, skip, skipAndTake, take, takeAll } from "./TakeFunction";

export class RootDomSelector {
  whereQuery: SelectQuery;

  constructor(whereQuery: SelectQuery) {
    this.whereQuery = whereQuery;
  }

  first(): SingleDomSelector {
    const elementSpec = new SingleDomSelector(this.whereQuery);
    elementSpec.takeFn = first();
    return elementSpec;
  }

  nth(n: number): SingleDomSelector {
    const elementSpec = new SingleDomSelector(this.whereQuery);
    elementSpec.takeFn = nth(n);
    return elementSpec;
  }

  takeAll(): MultipleDomSelector<NestArray1<DomNode>> {
    const elementSpec = new MultipleDomSelector<NestArray1<DomNode>>(
      this.whereQuery
    );
    elementSpec.takeFn = takeAll();
    return elementSpec;
  }

  skipAndTake(
    n: number,
    skip: number
  ): MultipleDomSelector<NestArray1<DomNode>> {
    const elementSpec = new MultipleDomSelector<NestArray1<DomNode>>(
      this.whereQuery
    );
    elementSpec.takeFn = skipAndTake(n, skip);
    return elementSpec;
  }

  skip(n: number): MultipleDomSelector<NestArray1<DomNode>> {
    const elementSpec = new MultipleDomSelector<NestArray1<DomNode>>(
      this.whereQuery
    );
    elementSpec.takeFn = skip(n);
    return elementSpec;
  }

  take(n: number): MultipleDomSelector<NestArray1<DomNode>> {
    const elementSpec = new MultipleDomSelector<NestArray1<DomNode>>(
      this.whereQuery
    );
    elementSpec.takeFn = take(n);
    return elementSpec;
  }

  child(whereQuery: SelectQuery): MultipleDomSelector<NestArray2<DomNode>> {
    const elementSpec = new MultipleDomSelector<NestArray2<DomNode>>(
      whereQuery
    );
    elementSpec.parentElementSpec = this.takeAll();
    return elementSpec;
  }

  next(whereQuery: SelectQuery): MultipleDomSelector<NestArray2<DomNode>> {
    const elementSpec = new MultipleDomSelector<NestArray2<DomNode>>(
      whereQuery
    );
    elementSpec.prevElementSpec = this.takeAll();
    return elementSpec;
  }
}
