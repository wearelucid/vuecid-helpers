"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = verifyTrailingSlash;

/**
 * Verify leading slash.
 *
 * @param  {string} str
 * @return {string}
 *
 * @example
 *
 * verifyTrailingSlash('myslug')
 * // -> 'myslug/'
 */
function verifyTrailingSlash(str) {
  return str.endsWith('/') ? str : "".concat(str, "/");
}