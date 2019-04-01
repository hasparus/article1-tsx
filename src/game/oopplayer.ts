import { Character, PlayerCharacters, Player } from "./core";

class OopPlayer implements Player {
  characters: PlayerCharacters = [];
  dragonCoins = 0;
  gold = 0;

  constructor(public displayName: string, public email: string) {}

  addCharacter(char: Character) {
    this.characters.push(char);
    return this;
  }
}

console.log(
  new OopPlayer("Joey2005", "joey@example.com").addCharacter({
    name: "Joey the Powerful",
    level: 1,
  })
);
