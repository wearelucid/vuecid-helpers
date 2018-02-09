'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeHomeSlugFromPermalink;
function removeHomeSlugFromPermalink(string) {
  if (string.endsWith('home')) {
    return string.slice(0, -4);
  } else if (string.endsWith('home/')) {
    return string.slice(0, -5);
  } else {
    return string;
  }
}