import { IntToString } from './IntToString';

type Updated<T, I extends string, X> = { 
  [K in keyof T]: K extends I ? X : T[K]
}

/**
 * Replace ith element of xs with x
 */
export function update<
  Xs extends readonly any[],
  I extends number,
  X
>(
  xs: Xs,
  i: I,
  x: number extends I ? Xs[number] : X
): number extends I ? Xs : Updated<Xs, IntToString<I>, X> {
  console.assert(i < xs.length, "i should be less than xs.length");
  return [...xs.slice(0, i), x, ...xs.slice(i + 1)] as any;
}
