"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = verifyLeadingSlash;

/**
 * Verify leading slash.
 *
 * @example
 *
 * verifyLeadingSlash('myslug')
 * // -> '/myslug'
 */
function verifyLeadingSlash(string) {
  return string.startsWith('/') ? string : "/".concat(string);
}