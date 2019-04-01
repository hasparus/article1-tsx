export function createElementAndLog(tagName, options) {
  console.log("Creating " + tagName);
  return document.createElement(tagName, options);
}

createElementAndLog("script").sr

