"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isHome;

/**
 * Returns true if we are on home, e.g. '/en/' or '/en' or '/'
 *
 * @param  {string} path
 * @param  {string} locale
 * @return {Boolean}
 *
 */
function isHome(path, locale) {
  return path === "/".concat(locale, "/") || path === "/".concat(locale) || path === '/';
}