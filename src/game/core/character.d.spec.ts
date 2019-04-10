import { Characters, EmptySlot } from "./character";

// @dts-jest:fail:snap
const _c1: Characters = [EmptySlot] as const;

// @dts-jest:pass:snap
const _c2: Characters = [EmptySlot, EmptySlot] as const;

// @dts-jest:pass:snap
const _c3: Characters = [EmptySlot, EmptySlot, EmptySlot] as const;

// @dts-jest:pass:snap
const _c4: Characters = [EmptySlot, EmptySlot, EmptySlot, EmptySlot] as const;

// @dts-jest:fail:snap
const _c5: Characters = [
  EmptySlot,
  EmptySlot,
  EmptySlot,
  EmptySlot,
  EmptySlot,
] as const;
