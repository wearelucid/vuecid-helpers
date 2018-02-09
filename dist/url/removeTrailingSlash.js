'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeTrailingSlash;
function removeTrailingSlash(string) {
  return string.endsWith('/') ? string.slice(0, -1) : string;
}