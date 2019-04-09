import {
  Character,
  Characters,
  Player as IPlayer,
  EmptySlot,
  DragonCoins,
} from "../core";
import { immutable } from "../util";

class Player implements IPlayer {
  characters: Characters = [EmptySlot, EmptySlot] as const;
  dragonCoins = DragonCoins(0);
  gold = 0;

  constructor(public displayName: string, public email: string) {}

  addCharacter(char: Character) {
    const indexOfEmpty = this.characters.indexOf(EmptySlot);
    if (indexOfEmpty === -1) {
      throw new Error("There is no empty character slot to add character");
    }
    this.characters = immutable.update(this.characters, indexOfEmpty, char);
    return this;
  }
}

console.log(
  new Player("Joey2005", "joey@example.com").addCharacter({
    name: "Joey the Powerful",
    level: 1,
  })
);
