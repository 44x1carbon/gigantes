import { DomNode } from "../DomNode";
import { NestArray } from "../NestArray";
import { SelectQuery } from "../query/WhereQuery";
import { RootDomSelector } from "./RootDomSelector";

export const domSelector = (whereQuery: SelectQuery): RootDomSelector => {
  const elementSpec = new RootDomSelector(whereQuery);
  return elementSpec;
};
