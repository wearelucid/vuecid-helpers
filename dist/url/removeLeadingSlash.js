"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeLeadingSlash;

/**
 * Remove leading slash.
 *
 * @param  {string} str
 * @return {string}
 *
 * @example
 *
 * removeLeadingSlash('/myslug/')
 * // -> 'myslug/'
 */
function removeLeadingSlash(str) {
  return str.startsWith('/') ? str.substr(1) : str;
}