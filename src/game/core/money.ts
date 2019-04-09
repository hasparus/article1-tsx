export type DragonCoins = number & { __type: "DragonCoins" };

export function DragonCoins(coins: number) {
  return coins as DragonCoins;
}

export type Gold = number & { __type?: "Gold" };

export function Gold(gold: number) {
  return gold as Gold;
}
