export enum Profession {
  Wizard,
  Warrior,
  Ranger,
}

export type Character = {
  name: string;
  level: number;
  profession?: Profession;
};

// We could go with Symbol, if we don't mind EmptySlot being truthy.
export const EmptySlot = null;
type EmptySlot = typeof EmptySlot;

export type CharacterSlot = Character | EmptySlot;

export type CharacterSlotsSizes = 2 | 3 | 4;

export interface CharacterSlots<K extends CharacterSlotsSizes>
  extends ReadonlyArray<CharacterSlot> {
  length: K;
}

export type Characters =
  | CharacterSlots<2>
  | CharacterSlots<3>
  | CharacterSlots<4>;
