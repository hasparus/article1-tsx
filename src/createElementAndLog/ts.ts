export function createElementAndLog<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  options?: ElementCreationOptions
): HTMLElementTagNameMap[K] {
  console.log("Creating " + tagName);
  return document.createElement<K>(tagName, options);
}

createElementAndLog("script").sr;
