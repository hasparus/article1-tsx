import { update } from "./immutable";

describe("immutable.update", () => {
  it("updates array", () => {
    const xs = [1, 2, 3];
    const actual = update(xs, 1, 20);

    expect(actual).toStrictEqual([1, 20, 3]);
  });

  it("doesn't mutate", () => {
    const xs = [1, 2, 3];
    const actual = update(xs, 1, 20);

    expect(actual).not.toBe(xs);
    expect(xs).toStrictEqual([1, 2, 3]);
  });
});
