"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHomeSlug;

/**
 * Test if slug is homeSlug ('home').
 *
 * @param  {string} slug
 * @param  {string} [homeSlug]
 * @return {Boolean}
 */
function isHomeSlug(slug) {
  var homeSlug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'home';
  return slug === homeSlug;
}