import {
  AndOperator,
  EqOperator,
  InOperator,
  LikeOperator,
  NEqOperator,
  NInOperator,
  Operator,
  OrOperator,
} from "./Operator";

export const convertWhereQueryToOperator = (query: SelectQuery): Operator => {
  if (isSingleQuery(query)) {
    return convertSingleQuery(query as SingleQuery);
  } else {
    return convertSetQuery(query as SetQuery);
  }
};

const convertSingleQuery = (query: SingleQuery) => {
  const andOperator = new AndOperator();

  Object.keys(query).forEach((key) => {
    if (query[key].eq) {
      andOperator.addOperator(new EqOperator(key, query[key].eq));
    }

    if (query[key].neq) {
      andOperator.addOperator(new NEqOperator(key, query[key].neq));
    }

    if (query[key].like) {
      andOperator.addOperator(new LikeOperator(key, query[key].like));
    }

    if (query[key].nlike) {
      andOperator.addOperator(new LikeOperator(key, query[key].nlike));
    }

    if (query[key].in) {
      andOperator.addOperator(new InOperator(key, query[key].in));
    }

    if (query[key].nin) {
      andOperator.addOperator(new NInOperator(key, query[key].nin));
    }
  });

  return andOperator;
};

const convertSetQuery = (query: SetQuery) => {
  const andOperator = new AndOperator();

  if (query.and) {
    query.and.forEach((q) => {
      if (isSingleQuery(q)) {
        andOperator.addOperator(convertSingleQuery(q as SingleQuery));
      } else {
        andOperator.addOperator(convertSetQuery(q as SetQuery));
      }
    });
  }

  if (query.or) {
    const orOperator = new OrOperator();
    query.or.forEach((q) => {
      if (isSingleQuery(q)) {
        orOperator.addOperator(convertSingleQuery(q as SingleQuery));
      } else {
        orOperator.addOperator(convertSetQuery(q as SetQuery));
      }
    });

    andOperator.addOperator(orOperator);
  }

  return andOperator;
};

export const isSingleQuery = (query: SingleQuery | SetQuery): boolean => {
  return !isSetQuery(query);
};

export const isSetQuery = (query: SingleQuery | SetQuery): boolean => {
  return Object.keys(query).some((key) => ["and", "or"].includes(key));
};

export type SelectQuery = SingleQuery | SetQuery;

type SingleQuery = {
  [key: string]: {
    eq?: string;
    like?: string;
    nlike?: string;
    in?: string[];
    nin?: string[];
    neq?: string;
  };
};

type SetQuery = {
  and?: (SingleQuery | SetQuery)[];
  or?: (SingleQuery | SetQuery)[];
};
