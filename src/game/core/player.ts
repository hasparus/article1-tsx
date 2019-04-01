import { Characters } from "./character";

export type Player = {
  displayName: string;
  email: string;
  characters: Characters;
  dragonCoins: number;
  gold: number;
};
