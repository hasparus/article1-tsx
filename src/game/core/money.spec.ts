import { DragonCoins, Gold } from "./money";

// Implicit conversion from numbers to Gold should work.
// @dts-jest:pass:snap
const _g1: Gold = 1000;

type NotGold = number & { __type?: "NotGold" };
// @dts-jest:fail:snap
const _g2: NotGold = Gold(1000);

// Implicit conversion from numbers to DragonCoins shouldn't work.
// @dts-jest:fail:snap
const _d1: DragonCoins = 10 ** 12;

// @dts-jest:pass:snap
const _d2: DragonCoins = DragonCoins(100);

// We can still treat DragonCoins and Gold as numbers
// @dts-jest:pass:snap
const _g3 = Gold(10000).toLocaleString();

// @dts-jest:pass:snap
const _d3 = DragonCoins(100).toFixed(2);
