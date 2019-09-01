"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeTrailingSlash;

/**
 * Remove trailing slash.
 *
 * @param  {string} str
 * @return {string}
 *
 * @example
 *
 * removeTrailingSlash('/myslug/')
 * // -> '/myslug'
 */
function removeTrailingSlash(str) {
  if (!str) return;
  return str.endsWith('/') ? str.slice(0, -1) : str;
}