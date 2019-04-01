"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeLeadingLang;

/**
 * Remove leading language locale.
 *
 * @param  {string} str
 * @return {string}
 *
 * @example
 *
 * removeLeadingLang('en/myslug/')
 * // -> 'myslug/'
 */
function removeLeadingLang(str) {
  return str.startsWith('en/') || str.startsWith('fr/') || str.startsWith('it/') || str.startsWith('de/') ? str.substr(3) : str;
}