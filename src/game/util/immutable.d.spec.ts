import { update } from "./immutable";

const abc = ["a", "b", "c"] as ["a", "b", "c"];
const kh = "kh" as const;

// @dts-jest:pass
const _t1: readonly ["a", "b", "kh"] = update(abc, 2, kh);

// @dts-jest:pass
const _t2: ["a", "b", "kh"] = update(abc, 2, kh);

// @dts-jest:pass
const _t3: [5.20, 7.34] = update([5.20, 7.34], 1, 7.34 as const);

// @dts-jest:pass
const _t4: [5.20, 7.34] = update([5.20, 1.34], 1, 7.34 as const);

const one: number = 1;

// @dts-jest:pass
const _t5: ['a', 'b'] = update(['a', 'b'], one, 'a')

// @dts-jest:fail:snap
const _t6: ['a', 'b'] = update(['a', 'b'], one, 'c')

// @dts-jest:pass
const _t7 = update(['a', 'b'], one, 'c') // => string
