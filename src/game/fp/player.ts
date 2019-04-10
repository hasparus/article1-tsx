import { Either, left, right } from "fp-ts/lib/Either";
import { EmptySlot, Characters, Character } from "../core";
import * as core from "../core";
import { immutable } from "../util";

type Player = Readonly<core.Player>;

const NO_SLOT_FOR_CHAR = "There is no slot for new character";

/**
 * Adds a character if there is an empty slot.
 */
function addCharacter(
  chars: Characters,
  newChar: Character
): Either<typeof NO_SLOT_FOR_CHAR, Characters> {
  const indexOfEmpty = chars.indexOf(EmptySlot);
  if (indexOfEmpty === -1) {
    return left(NO_SLOT_FOR_CHAR);
  }
  return right(immutable.update(chars, indexOfEmpty, newChar));
}
