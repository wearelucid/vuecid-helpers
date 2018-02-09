'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeTrailingSlash;
/**
 * Remove trailing slash.
 *
 * @example
 *
 * removeTrailingSlash('/myslug/')
 * // -> '/myslug'
 */

function removeTrailingSlash(string) {
  return string.endsWith('/') ? string.slice(0, -1) : string;
}