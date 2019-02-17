"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = verifyLeadingSlash;

/**
 * Verify leading slash.
 *
 * @param  {string} str
 * @return {string}
 *
 * @example
 *
 * verifyLeadingSlash('myslug')
 * // -> '/myslug'
 */
function verifyLeadingSlash(str) {
  return str.startsWith('/') ? str : "/".concat(str);
}