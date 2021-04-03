export type NestArray0<T> = T;
export type NestArray1<T> = Array<NestArray0<T>>;
export type NestArray2<T> = Array<NestArray1<T>>;
export type NestArray3<T> = Array<NestArray2<T>>;
export type NestArray4<T> = Array<NestArray3<T>>;
export type NestArray5<T> = Array<NestArray4<T>>;
export type NestArray6<T> = Array<NestArray5<T>>;

export type NestArray<T> =
  | NestArray0<T>
  | NestArray1<T>
  | NestArray2<T>
  | NestArray3<T>
  | NestArray4<T>
  | NestArray5<T>
  | NestArray6<T>;

export type DecrementNest<T, N extends NestArray<T>> = N extends NestArray6<T>
  ? NestArray5<T>
  : N extends NestArray5<T>
  ? NestArray4<T>
  : N extends NestArray4<T>
  ? NestArray3<T>
  : N extends NestArray3<T>
  ? NestArray2<T>
  : N extends NestArray2<T>
  ? NestArray1<T>
  : N extends NestArray1<T>
  ? NestArray0<T>
  : N extends NestArray0<T>
  ? T
  : T;

export type IncrementNest<T, N extends NestArray<T>> = N extends NestArray0<T>
  ? NestArray1<T>
  : N extends NestArray1<T>
  ? NestArray2<T>
  : N extends NestArray2<T>
  ? NestArray3<T>
  : N extends NestArray3<T>
  ? NestArray4<T>
  : N extends NestArray4<T>
  ? NestArray5<T>
  : N extends NestArray5<T>
  ? NestArray6<T>
  : any;

export type NestMapType<T, N extends NestArray<T>, R> = N extends NestArray0<T>
  ? NestArray0<R>
  : N extends NestArray1<T>
  ? NestArray1<R>
  : N extends NestArray2<T>
  ? NestArray2<R>
  : N extends NestArray3<T>
  ? NestArray3<R>
  : N extends NestArray4<T>
  ? NestArray4<R>
  : N extends NestArray5<T>
  ? NestArray5<R>
  : N extends NestArray6<T>
  ? NestArray6<R>
  : any;

// 構造を保ちつつ終端の要素をマップする
export const nestMap = <T, N extends NestArray<T>, R>(
  nestArray: N,
  mapFn: (t: T) => R
): NestMapType<T, N, R> => {
  if (nestArray instanceof Array) {
    if (!(nestArray[0] instanceof Array)) {
      // @ts-ignore
      return nestArray.map((item) => mapFn(item as T));
    } else {
      // @ts-ignore
      return nestArray.map((item) => nestMap(item, mapFn)) as NestArray<R>;
    }
  }

  // @ts-ignore
  return mapFn(nestArray);
};
