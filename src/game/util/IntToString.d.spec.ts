import { IntToString } from "./IntToString";

declare const five: IntToString<5>;

// @dts-jest:pass
const _test1: "5" = five;

// @dts-jest:fail
const _test2: "4" = five;

declare const str: IntToString<10000000>;

// @dts-jest:pass
typeof str; // => string
