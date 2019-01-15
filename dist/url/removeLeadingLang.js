"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeLeadingLang;

/**
 * Remove leading language locale.
 *
 * @example
 *
 * removeLeadingLang('en/myslug/')
 * // -> 'myslug/'
 */
function removeLeadingLang(string) {
  return string.startsWith('en/') || string.startsWith('fr/') || string.startsWith('it/') || string.startsWith('de/') ? string.substr(3) : string;
}