import { DomNode } from "../DomNode";
import { NestArray } from "../NestArray";

export type TakeFunctionReturnType = NestArray<DomNode>;

export type TakeFunction<T extends TakeFunctionReturnType> = (
  domNodeList: DomNode[]
) => T;

export const first: () => TakeFunction<DomNode> = () => (
  domNodeList: DomNode[]
) => domNodeList[0];

export const nth: (n: number) => TakeFunction<DomNode> = (n: number) => (
  domNodeList: DomNode[]
) => domNodeList[n - 1];

export const takeAll: () => TakeFunction<DomNode[]> = () => (
  domNodeList: DomNode[]
) => domNodeList;

export const take: (n: number) => TakeFunction<DomNode[]> = (n: number) => (
  domNodeList: DomNode[]
) => domNodeList.slice(0, n);

export const skipAndTake: (n: number, m: number) => TakeFunction<DomNode[]> = (
  n: number,
  m: number
) => (domNodeList: DomNode[]) => domNodeList.slice(n, n + m);

export const skip: (n: number) => TakeFunction<DomNode[]> = (n: number) => (
  domNodeList: DomNode[]
) => domNodeList.slice(n);
