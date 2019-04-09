import { Characters } from "./character";
import { DragonCoins, Gold } from "./money";

export type Player = {
  displayName: string;
  email: string;
  characters: Characters;
  dragonCoins: DragonCoins;
  gold: Gold;
};
