import { PlayerCharacters } from "./character";

export type Player = {
  displayName: string;
  email: string;
  characters: PlayerCharacters;
  dragonCoins: number;
  gold: number;
};
