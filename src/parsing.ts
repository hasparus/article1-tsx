import * as ts from "typescript";

const sourceFile = ts.createSourceFile(
  'foo.ts',
  `
    const add = (a: number, v: number) => a + v;
    const sum = [1, 2, 3, 4, 5, 6].reduce(add);
  `,
  ts.ScriptTarget.ESNext,
  false,
  ts.ScriptKind.TS
);

console.log(sourceFile);