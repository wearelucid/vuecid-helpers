'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeLeadingSlash;
function removeLeadingSlash(string) {
  return string.startsWith('/') ? string.substr(1) : string;
}