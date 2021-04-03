import { DomNode } from "../DomNode";

export type ExtractOption<T> = {
  [P in keyof T]: ((domNode: DomNode) => T[P]) | ExtractOption<T[P]>;
};

export const extract = <T>(option: ExtractOption<T>, domNode: DomNode): T => {
  const result = {};
  Object.keys(option).forEach((key) => {
    const value = option[key];
    if (typeof value === "object") {
      result[key] = extract(value, domNode);
    } else {
      result[key] = value(domNode);
    }
  });
  return result as T;
};

export const mapExtract = <T, R>(
  extractFn: (domNode: DomNode) => T,
  mapFn: (t: T) => R
): ((domNode: DomNode) => R) => {
  return (body: DomNode) => {
    return mapFn(extractFn(body));
  };
};
