export function update<Xs extends readonly any[]>(
  xs: Xs,
  i: number,
  x: Xs[number]
): Xs {
  return ([...xs.slice(0, i), x, ...xs.slice(i + 1)] as unknown) as Xs;
}
