import { DomNode } from "../DomNode";
import { NestArray } from "../NestArray";
import { IdentityDomSelector } from "./IdentityDomSelector";
import { MultipleDomSelector } from "./MultipleDomSelector";
import { SingleDomSelector } from "./SingleDomSelector";

export class MapDomSelector<
  RT extends
    | IdentityDomSelector
    | MultipleDomSelector<NestArray<DomNode>>
    | SingleDomSelector,
  T extends
    | IdentityDomSelector
    | MultipleDomSelector<NestArray<DomNode>>
    | SingleDomSelector,
  R extends
    | IdentityDomSelector
    | MultipleDomSelector<NestArray<DomNode>>
    | SingleDomSelector
> {
  fn: (spec: T | RT) => R;
  parent: MapDomSelector<RT, any, T>;

  constructor(fn: (spec: T) => R) {
    this.fn = fn;
  }

  invoke(spec: RT): R {
    if (this.parent) {
      return this.fn(this.parent.invoke(spec));
    }
    return this.fn(spec);
  }

  map<
    R2 extends
      | IdentityDomSelector
      | MultipleDomSelector<NestArray<DomNode>>
      | SingleDomSelector
  >(fn: (spec: R) => R2): MapDomSelector<RT, R, R2> {
    const mapSpec = new MapDomSelector<RT, R, R2>(fn);
    mapSpec.parent = this;
    return mapSpec;
  }
}

export const mapSpec = <
  T extends
    | IdentityDomSelector
    | MultipleDomSelector<NestArray<DomNode>>
    | SingleDomSelector,
  R extends
    | IdentityDomSelector
    | MultipleDomSelector<NestArray<DomNode>>
    | SingleDomSelector
>(
  fn: (spec: T) => R
) => {
  return new MapDomSelector(fn);
};
