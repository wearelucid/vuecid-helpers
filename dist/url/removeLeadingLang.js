'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeLeadingLang;
function removeLeadingLang(string) {
  return string.startsWith('en/') || string.startsWith('fr/') ? string.substr(3) : string;
}