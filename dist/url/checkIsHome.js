"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkIsHome;

/**
 * Returns true if we are on home, e.g. '/en/' or '/en' or '/'
 */
function checkIsHome(path, locale) {
  return path === "/".concat(locale, "/") || path === "/".concat(locale) || path === '/';
}