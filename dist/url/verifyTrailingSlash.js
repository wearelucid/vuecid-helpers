"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = verifyTrailingSlash;

/**
 * Verify leading slash.
 *
 * @example
 *
 * verifyTrailingSlash('myslug')
 * // -> 'myslug/'
 */
function verifyTrailingSlash(string) {
  return string.endsWith('/') ? string : "".concat(string, "/");
}